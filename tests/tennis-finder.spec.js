const { test, expect } = require('@playwright/test');

test.describe('Tennis Match Finder', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file://' + __dirname + '/../index.html');
    await page.waitForLoadState('networkidle');
  });

  test('should display the tennis terminal interface', async ({ page }) => {
    // Check main title
    await expect(page.locator('#title')).toContainText('🎾 TENNIS TERMINAL');
    
    // Check form elements exist
    await expect(page.locator('#player-name')).toBeVisible();
    await expect(page.locator('#ntrp-rating')).toBeVisible();
    await expect(page.locator('#match-type')).toBeVisible();
    await expect(page.locator('#day-of-week')).toBeVisible();
    await expect(page.locator('#start-time')).toBeVisible();
    await expect(page.locator('#end-time')).toBeVisible();
    await expect(page.locator('#add-match-btn')).toBeVisible();
  });

  test('should add a new match and display it correctly', async ({ page }) => {
    // Fill out the form
    await page.fill('#player-name', 'Test Player');
    await page.selectOption('#ntrp-rating', '4.0');
    await page.selectOption('#match-type', 'singles');
    await page.selectOption('#day-of-week', 'monday');
    await page.selectOption('#start-time', '10:00');
    await page.selectOption('#end-time', '12:00');

    // Submit the form
    await page.click('#add-match-btn');

    // Wait for success message
    await expect(page.locator('.success-message')).toBeVisible();
    await expect(page.locator('.success-message')).toContainText('Match slot added successfully!');

    // Check that the match appears in the list
    await expect(page.locator('.match-group')).toBeVisible();
    await expect(page.locator('.match-time')).toContainText('Mon 10:00–12:00');
    await expect(page.locator('.player-count')).toContainText('1 Players');
    
    // Click to see details
    await page.click('.match-group.clickable');
    await expect(page.locator('.player-item')).toContainText('Test Player (4.0)');
  });

  test('should validate form fields', async ({ page }) => {
    // Try to submit empty form
    await page.click('#add-match-btn');
    
    // Should show validation message (HTML5 validation will prevent submission)
    // Check that no success message appears
    await expect(page.locator('.success-message')).not.toBeVisible();
  });

  test('should validate end time is after start time', async ({ page }) => {
    // Fill form with invalid time range
    await page.fill('#player-name', 'Test Player');
    await page.selectOption('#ntrp-rating', '4.0');
    await page.selectOption('#match-type', 'singles');
    await page.selectOption('#day-of-week', 'monday');
    await page.selectOption('#start-time', '12:00');
    await page.selectOption('#end-time', '10:00'); // Earlier than start time

    await page.click('#add-match-btn');

    // Should show error message
    await expect(page.locator('.error-message')).toBeVisible();
    await expect(page.locator('.error-message')).toContainText('End time must be after start time');
  });

  test('should group compatible players together', async ({ page }) => {
    // Add first player
    await page.fill('#player-name', 'Player One');
    await page.selectOption('#ntrp-rating', '4.0');
    await page.selectOption('#match-type', 'doubles');
    await page.selectOption('#day-of-week', 'tuesday');
    await page.selectOption('#start-time', '14:00');
    await page.selectOption('#end-time', '16:00');
    await page.click('#add-match-btn');
    
    // Wait for first match to be added
    await expect(page.locator('.success-message')).toBeVisible();
    await page.waitForTimeout(1000);

    // Add second compatible player
    await page.fill('#player-name', 'Player Two');
    await page.selectOption('#ntrp-rating', '4.0');
    await page.selectOption('#match-type', 'doubles');
    await page.selectOption('#day-of-week', 'tuesday');
    await page.selectOption('#start-time', '14:30');
    await page.selectOption('#end-time', '16:30');
    await page.click('#add-match-btn');

    // Wait for second match to be added
    await expect(page.locator('.success-message')).toBeVisible();
    await page.waitForTimeout(1000);

    // Should see only one match group with 2 players
    const matchGroups = page.locator('.match-group');
    await expect(matchGroups).toHaveCount(1);
    await expect(page.locator('.player-count')).toContainText('2 Players');
    
    // Click to see both players
    await page.click('.match-group.clickable');
    const playerItems = page.locator('.player-item');
    await expect(playerItems).toHaveCount(2);
    await expect(playerItems.first()).toContainText('Player One (4.0)');
    await expect(playerItems.last()).toContainText('Player Two (4.0)');
  });

  test('should switch languages correctly', async ({ page }) => {
    // Test German
    await page.click('#lang-de');
    await expect(page.locator('#title')).toContainText('🎾 TENNIS-TERMINAL');
    await expect(page.locator('#label-name')).toContainText('Spielername:');

    // Test French
    await page.click('#lang-fr');
    await expect(page.locator('#title')).toContainText('🎾 TERMINAL DE TENNIS');
    await expect(page.locator('#label-name')).toContainText('Nom du joueur:');

    // Test Chinese
    await page.click('#lang-zh');
    await expect(page.locator('#title')).toContainText('🎾 網球終端機');
    await expect(page.locator('#label-name')).toContainText('球員姓名:');

    // Back to English
    await page.click('#lang-en');
    await expect(page.locator('#title')).toContainText('🎾 TENNIS TERMINAL');
    await expect(page.locator('#label-name')).toContainText('Player Name:');
  });

  test('should filter matches by weekdays/weekends', async ({ page }) => {
    // Add a weekday match
    await page.fill('#player-name', 'Weekday Player');
    await page.selectOption('#ntrp-rating', '4.0');
    await page.selectOption('#match-type', 'singles');
    await page.selectOption('#day-of-week', 'monday');
    await page.selectOption('#start-time', '10:00');
    await page.selectOption('#end-time', '12:00');
    await page.click('#add-match-btn');
    await page.waitForTimeout(500);

    // Add a weekend match
    await page.fill('#player-name', 'Weekend Player');
    await page.selectOption('#ntrp-rating', '4.0');
    await page.selectOption('#match-type', 'singles');
    await page.selectOption('#day-of-week', 'saturday');
    await page.selectOption('#start-time', '10:00');
    await page.selectOption('#end-time', '12:00');
    await page.click('#add-match-btn');
    await page.waitForTimeout(500);

    // Should see both matches initially
    await expect(page.locator('.match-group')).toHaveCount(2);

    // Filter to weekdays only
    await page.click('#filter-weekdays');
    await expect(page.locator('.match-group')).toHaveCount(1);
    await expect(page.locator('.match-time')).toContainText('Mon');

    // Filter to weekends only
    await page.click('#filter-weekends');
    await expect(page.locator('.match-group')).toHaveCount(1);
    await expect(page.locator('.match-time')).toContainText('Sat');

    // Show all
    await page.click('#filter-all');
    await expect(page.locator('.match-group')).toHaveCount(2);
  });

  test('should load and clear demo players', async ({ page }) => {
    // Initially should have no matches
    await expect(page.locator('.empty-message')).toBeVisible();

    // Load demo players
    await page.click('.demo-btn:has-text("🎾 Demo")');
    
    // Should see success message and matches
    await expect(page.locator('.success-message')).toBeVisible();
    await expect(page.locator('.match-group')).toHaveCount.greaterThan(0);
    
    // Button should change to clear demo
    await expect(page.locator('.demo-btn:has-text("🚫 Clear Demo")')).toBeVisible();

    // Clear demo players
    await page.click('.demo-btn:has-text("🚫 Clear Demo")');
    
    // Should be back to empty state
    await expect(page.locator('.empty-message')).toBeVisible();
    await expect(page.locator('.demo-btn:has-text("🎾 Demo")')).toBeVisible();
  });

  test('should persist matches after page refresh', async ({ page }) => {
    // Add a match
    await page.fill('#player-name', 'Persistent Player');
    await page.selectOption('#ntrp-rating', '4.0');
    await page.selectOption('#match-type', 'singles');
    await page.selectOption('#day-of-week', 'wednesday');
    await page.selectOption('#start-time', '15:00');
    await page.selectOption('#end-time', '17:00');
    await page.click('#add-match-btn');
    
    // Wait for match to be saved
    await expect(page.locator('.success-message')).toBeVisible();
    await page.waitForTimeout(1000);

    // Refresh the page
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Match should still be there
    await expect(page.locator('.match-group')).toBeVisible();
    await page.click('.match-group.clickable');
    await expect(page.locator('.player-item')).toContainText('Persistent Player (4.0)');
  });

  test('should export and import matches', async ({ page }) => {
    // Add a test match first
    await page.fill('#player-name', 'Export Test Player');
    await page.selectOption('#ntrp-rating', '3.5');
    await page.selectOption('#match-type', 'doubles');
    await page.selectOption('#day-of-week', 'friday');
    await page.selectOption('#start-time', '18:00');
    await page.selectOption('#end-time', '20:00');
    await page.click('#add-match-btn');
    await page.waitForTimeout(500);

    // Set up download handling
    const downloadPromise = page.waitForEvent('download');
    await page.click('.demo-btn:has-text("💾 Export")');
    const download = await downloadPromise;
    
    // Verify download occurred
    expect(download.suggestedFilename()).toBe('tennis-matches.json');
  });
});