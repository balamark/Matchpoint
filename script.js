// Multi-language support
const TEXTS = {
    en: {
        title: "🎾 TENNIS TERMINAL",
        formTitle: "ENTER MATCH DETAILS",
        labelUserId: "User ID:",
        labelName: "Player Name:",
        labelRating: "NTRP Rating:",
        labelType: "Match Type:",
        labelDay: "Day:",
        labelStart: "Start Time:",
        labelEnd: "End Time:",
        addMatchBtn: "▶ Add Match Slot",
        matchesTitle: "📆 CURRENT MATCHED GAMES:",
        loadingMsg: "Loading matches...",
        emptyMsg: "No matches found. Be the first to add one!",
        optionSingles: "Singles",
        optionDoubles: "Doubles",
        optionMonday: "Monday",
        optionTuesday: "Tuesday",
        optionWednesday: "Wednesday",
        optionThursday: "Thursday",
        optionFriday: "Friday",
        optionSaturday: "Saturday",
        optionSunday: "Sunday",
        players: "Players",
        fullGroup: "✅ Full Group",
        avgRating: "Avg NTRP",
        single: "Single",
        double: "Double",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat",
        sun: "Sun",
        successAdded: "Match slot added successfully!",
        errorAdd: "Error adding match slot. Please try again.",
        errorLoad: "Error loading matches. Please refresh the page.",
        placeholderName: "Enter your name",
        weekdays: "Weekdays",
        weekends: "Weekends",
        allDays: "All Days",
        singles: "Singles",
        doubles: "Doubles",
        selectRating: "Select rating",
        selectType: "Select type",
        selectDays: "Select days",
        selectStartTime: "Select start time",
        selectEndTime: "Select end time",
        clickToSeeDetails: "Click to see details",
        filterByDayType: "Filter by Day Type:",
        systemDescription: "System ready • Add your match details to find compatible tennis partners • Smart grouping by skill level and time overlap",
        spot: "spot",
        spots: "spots",
        spotsLeft: "left",
        editMatch: "Edit",
        deleteMatch: "Delete",
        confirmDelete: "Are you sure you want to delete this match slot?",
        updateMatch: "Update Match",
        cancelEdit: "Cancel",
        matchUpdated: "Match updated successfully!",
        matchDeleted: "Match deleted successfully!",
        errorUpdate: "Error updating match. Please try again.",
        errorDelete: "Error deleting match. Please try again.",
        adminMode: "Admin",
        exitAdmin: "Exit Admin",
        adminPassword: "Enter admin password:",
        wrongPassword: "Wrong password!",
        adminModeActive: "Admin mode active",
        placeholderUserId: "Enter your unique ID",
        searchTitle: "Search Matches:",
        searchPlaceholder: "Search by player name or user ID",
        searchBtn: "Search",
        clearSearchBtn: "Clear",
        searchResults: "Search Results",
        noSearchResults: "No matches found for your search",
        darkTheme: "Dark Theme",
        lightTheme: "Light Theme"
    },
    de: {
        title: "🎾 TENNIS-TERMINAL",
        formTitle: "SPIELDETAILS EINGEBEN",
        labelUserId: "Benutzer-ID:",
        labelName: "Spielername:",
        labelRating: "NTRP-Bewertung:",
        labelType: "Spieltyp:",
        labelDay: "Tag:",
        labelStart: "Startzeit:",
        labelEnd: "Endzeit:",
        addMatchBtn: "▶ Spielzeit hinzufügen",
        matchesTitle: "📆 AKTUELLE SPIELE:",
        loadingMsg: "Lade Spiele...",
        emptyMsg: "Keine Spiele gefunden. Sei der Erste!",
        optionSingles: "Einzel",
        optionDoubles: "Doppel",
        optionMonday: "Montag",
        optionTuesday: "Dienstag",
        optionWednesday: "Mittwoch",
        optionThursday: "Donnerstag",
        optionFriday: "Freitag",
        optionSaturday: "Samstag",
        optionSunday: "Sonntag",
        players: "Spieler",
        fullGroup: "✅ Gruppe voll",
        avgRating: "Ø NTRP",
        single: "Einzel",
        double: "Doppel",
        mon: "Mo",
        tue: "Di",
        wed: "Mi",
        thu: "Do",
        fri: "Fr",
        sat: "Sa",
        sun: "So",
        successAdded: "Spielzeit erfolgreich hinzugefügt!",
        errorAdd: "Fehler beim Hinzufügen. Bitte versuchen Sie es erneut.",
        errorLoad: "Fehler beim Laden. Bitte Seite aktualisieren.",
        placeholderName: "Namen eingeben",
        weekdays: "Wochentage",
        weekends: "Wochenende",
        allDays: "Alle Tage",
        singles: "Einzel",
        doubles: "Doppel",
        selectRating: "Bewertung wählen",
        selectType: "Typ wählen",
        selectDays: "Tage wählen",
        selectStartTime: "Startzeit wählen",
        selectEndTime: "Endzeit wählen",
        clickToSeeDetails: "Klicken für Details",
        filterByDayType: "Nach Tagestyp filtern:",
        systemDescription: "System bereit • Fügen Sie Ihre Match-Details hinzu, um kompatible Tennispartner zu finden • Intelligente Gruppierung nach Können und Zeitüberschneidung",
        spot: "Platz",
        spots: "Plätze",
        spotsLeft: "übrig",
        editMatch: "Bearbeiten",
        deleteMatch: "Löschen",
        confirmDelete: "Sind Sie sicher, dass Sie diesen Match-Slot löschen möchten?",
        updateMatch: "Match aktualisieren",
        cancelEdit: "Abbrechen",
        matchUpdated: "Match erfolgreich aktualisiert!",
        matchDeleted: "Match erfolgreich gelöscht!",
        errorUpdate: "Fehler beim Aktualisieren. Bitte versuchen Sie es erneut.",
        errorDelete: "Fehler beim Löschen. Bitte versuchen Sie es erneut.",
        adminMode: "Admin",
        exitAdmin: "Admin verlassen",
        adminPassword: "Admin-Passwort eingeben:",
        wrongPassword: "Falsches Passwort!",
        adminModeActive: "Admin-Modus aktiv",
        placeholderUserId: "Geben Sie Ihre eindeutige ID ein",
        searchTitle: "Spiele suchen:",
        searchPlaceholder: "Nach Spielername oder Benutzer-ID suchen",
        searchBtn: "Suchen",
        clearSearchBtn: "Löschen",
        searchResults: "Suchergebnisse",
        noSearchResults: "Keine Spiele für Ihre Suche gefunden",
        darkTheme: "Dunkles Theme",
        lightTheme: "Helles Theme"
    },
    fr: {
        title: "🎾 TERMINAL DE TENNIS",
        formTitle: "SAISIR LES DÉTAILS DU MATCH",
        labelUserId: "ID utilisateur:",
        labelName: "Nom du joueur:",
        labelRating: "Classement NTRP:",
        labelType: "Type de match:",
        labelDay: "Jour:",
        labelStart: "Heure de début:",
        labelEnd: "Heure de fin:",
        addMatchBtn: "▶ Ajouter un créneau",
        matchesTitle: "📆 PARTIES ACTUELLES:",
        loadingMsg: "Chargement des parties...",
        emptyMsg: "Aucune partie trouvée. Soyez le premier!",
        optionSingles: "Simple",
        optionDoubles: "Double",
        optionMonday: "Lundi",
        optionTuesday: "Mardi",
        optionWednesday: "Mercredi",
        optionThursday: "Jeudi",
        optionFriday: "Vendredi",
        optionSaturday: "Samedi",
        optionSunday: "Dimanche",
        players: "Joueurs",
        fullGroup: "✅ Groupe complet",
        avgRating: "Moy NTRP",
        single: "Simple",
        double: "Double",
        mon: "Lun",
        tue: "Mar",
        wed: "Mer",
        thu: "Jeu",
        fri: "Ven",
        sat: "Sam",
        sun: "Dim",
        successAdded: "Créneau ajouté avec succès!",
        errorAdd: "Erreur lors de l'ajout. Veuillez réessayer.",
        errorLoad: "Erreur de chargement. Veuillez actualiser la page.",
        placeholderName: "Entrez votre nom",
        weekdays: "Jours de semaine",
        weekends: "Week-ends",
        allDays: "Tous les jours",
        singles: "Simple",
        doubles: "Double",
        selectRating: "Choisir niveau",
        selectType: "Choisir type",
        selectDays: "Choisir jours",
        selectStartTime: "Choisir heure début",
        selectEndTime: "Choisir heure fin",
        clickToSeeDetails: "Cliquer pour voir les détails",
        filterByDayType: "Filtrer par type de jour:",
        systemDescription: "Système prêt • Ajoutez vos détails de match pour trouver des partenaires de tennis compatibles • Regroupement intelligent par niveau et chevauchement horaire",
        spot: "place",
        spots: "places",
        spotsLeft: "restantes",
        editMatch: "Modifier",
        deleteMatch: "Supprimer",
        confirmDelete: "Êtes-vous sûr de vouloir supprimer ce créneau de match?",
        updateMatch: "Mettre à jour le match",
        cancelEdit: "Annuler",
        matchUpdated: "Match mis à jour avec succès!",
        matchDeleted: "Match supprimé avec succès!",
        errorUpdate: "Erreur lors de la mise à jour. Veuillez réessayer.",
        errorDelete: "Erreur lors de la suppression. Veuillez réessayer.",
        adminMode: "Admin",
        exitAdmin: "Quitter Admin",
        adminPassword: "Entrez le mot de passe admin:",
        wrongPassword: "Mot de passe incorrect!",
        adminModeActive: "Mode admin actif",
        placeholderUserId: "Entrez votre ID unique",
        searchTitle: "Rechercher des matchs:",
        searchPlaceholder: "Rechercher par nom de joueur ou ID utilisateur",
        searchBtn: "Rechercher",
        clearSearchBtn: "Effacer",
        searchResults: "Résultats de recherche",
        noSearchResults: "Aucun match trouvé pour votre recherche",
        darkTheme: "Thème Sombre",
        lightTheme: "Thème Clair"
    },
    zh: {
        title: "🎾 網球終端機",
        formTitle: "輸入比賽詳情",
        labelUserId: "用戶ID:",
        labelName: "球員姓名:",
        labelRating: "NTRP 評級:",
        labelType: "比賽類型:",
        labelDay: "日期:",
        labelStart: "開始時間:",
        labelEnd: "結束時間:",
        addMatchBtn: "▶ 新增比賽時段",
        matchesTitle: "📆 目前配對比賽:",
        loadingMsg: "載入比賽中...",
        emptyMsg: "找不到比賽。成為第一位加入者！",
        optionSingles: "單打",
        optionDoubles: "雙打",
        optionMonday: "星期一",
        optionTuesday: "星期二",
        optionWednesday: "星期三",
        optionThursday: "星期四",
        optionFriday: "星期五",
        optionSaturday: "星期六",
        optionSunday: "星期日",
        players: "球員",
        fullGroup: "✅ 已滿員",
        avgRating: "平均 NTRP",
        single: "單打",
        double: "雙打",
        singles: "單打",
        doubles: "雙打",
        mon: "週一",
        tue: "週二",
        wed: "週三",
        thu: "週四",
        fri: "週五",
        sat: "週六",
        sun: "週日",
        successAdded: "比賽時段新增成功！",
        errorAdd: "新增時發生錯誤，請重試。",
        errorLoad: "載入時發生錯誤，請重新整理頁面。",
        placeholderName: "輸入您的姓名",
        weekdays: "平日",
        weekends: "週末",
        allDays: "所有日子",
        selectRating: "選擇評級",
        selectType: "選擇類型",
        selectDays: "選擇日期",
        selectStartTime: "選擇開始時間",
        selectEndTime: "選擇結束時間",
        clickToSeeDetails: "",
        filterByDayType: "按日期類型篩選:",
        systemDescription: "系統就緒 • 添加您的比賽詳情以尋找合適的網球夥伴 • 根據技能水平和時間重疊進行智能分組",
        spot: "名額",
        spots: "名額",
        spotsLeft: "剩餘名額",
        editMatch: "編輯",
        deleteMatch: "刪除",
        confirmDelete: "您確定要刪除此比賽時段嗎？",
        updateMatch: "更新比賽",
        cancelEdit: "取消",
        matchUpdated: "比賽更新成功！",
        matchDeleted: "比賽刪除成功！",
        errorUpdate: "更新時發生錯誤，請重試。",
        errorDelete: "刪除時發生錯誤，請重試。",
        adminMode: "管理員",
        exitAdmin: "退出管理",
        adminPassword: "輸入管理員密碼:",
        wrongPassword: "密碼錯誤！",
        adminModeActive: "管理員模式已啟動",
        placeholderUserId: "輸入您的唯一ID",
        searchTitle: "搜尋比賽:",
        searchPlaceholder: "按球員姓名或用戶ID搜尋",
        searchBtn: "搜尋",
        clearSearchBtn: "清除",
        searchResults: "搜尋結果",
        noSearchResults: "找不到符合您搜尋的比賽",
        darkTheme: "深色主題",
        lightTheme: "淺色主題"
    }
};

// Global state
let currentLanguage = 'en';
let supabase;
let matches = [];
let isAdminMode = false;
let currentUserId = null;
let isDarkTheme = false;

// Initialize language detection
function detectLanguage() {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('de')) return 'de';
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('zh')) return 'zh';
    return 'en';
}

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    updateTexts();
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Save preference
    localStorage.setItem('preferred-language', lang);
}

// Update all text elements
function updateTexts() {
    const t = TEXTS[currentLanguage];

     // Update system description
     const systemDesc = document.getElementById('system-description');
     if (systemDesc) {
         systemDesc.textContent = t.systemDescription;
     }
    
    // Update main elements with null checks
    const title = document.getElementById('title');
    const formTitle = document.getElementById('form-title');
    const matchesTitle = document.getElementById('matches-title');
    const loadingMsg = document.getElementById('loading-msg');
    const filterTitle = document.getElementById('filter-title');
    
    if (title) title.textContent = t.title;
    if (formTitle) formTitle.textContent = t.formTitle;
    if (matchesTitle) matchesTitle.textContent = t.matchesTitle;
    if (loadingMsg) loadingMsg.textContent = t.loadingMsg;
    if (filterTitle) filterTitle.textContent = t.filterByDayType;
    
    // Update filter buttons
    const filterAll = document.getElementById('filter-all');
    const filterWeekdays = document.getElementById('filter-weekdays');
    const filterWeekends = document.getElementById('filter-weekends');
    
    if (filterAll) filterAll.textContent = t.allDays;
    if (filterWeekdays) filterWeekdays.textContent = t.weekdays;
    if (filterWeekends) filterWeekends.textContent = t.weekends;
    
    // Update labels with null checks
    const labelUserId = document.getElementById('label-user-id');
    const labelName = document.getElementById('label-name');
    const labelRating = document.getElementById('label-rating');
    const labelType = document.getElementById('label-type');
    const labelDay = document.getElementById('label-day');
    const labelStart = document.getElementById('label-start');
    const labelEnd = document.getElementById('label-end');
    
    if (labelUserId) labelUserId.textContent = t.labelUserId;
    if (labelName) labelName.textContent = t.labelName;
    if (labelRating) labelRating.textContent = t.labelRating;
    if (labelType) labelType.textContent = t.labelType;
    if (labelDay) labelDay.textContent = t.labelDay;
    if (labelStart) labelStart.textContent = t.labelStart;
    if (labelEnd) labelEnd.textContent = t.labelEnd;
    
    // Update dropdown placeholders
    const selectRating = document.getElementById('select-rating');
    const selectType = document.getElementById('select-type');
    const selectStartTime = document.getElementById('select-start-time');
    const selectEndTime = document.getElementById('select-end-time');
    
    if (selectRating) selectRating.textContent = t.selectRating;
    if (selectType) selectType.textContent = t.selectType;
    if (selectStartTime) selectStartTime.textContent = t.selectStartTime;
    if (selectEndTime) selectEndTime.textContent = t.selectEndTime;
    
    // Update button with null check
    const addMatchBtn = document.getElementById('add-match-btn');
    if (addMatchBtn) addMatchBtn.textContent = t.addMatchBtn;
    
    // Update options with null checks
    const optionSingles = document.getElementById('option-singles');
    const optionDoubles = document.getElementById('option-doubles');
    
    if (optionSingles) optionSingles.textContent = t.optionSingles;
    if (optionDoubles) optionDoubles.textContent = t.optionDoubles;
    
    // Update day checkboxes
    const checkMonday = document.getElementById('check-monday');
    const checkTuesday = document.getElementById('check-tuesday');
    const checkWednesday = document.getElementById('check-wednesday');
    const checkThursday = document.getElementById('check-thursday');
    const checkFriday = document.getElementById('check-friday');
    const checkSaturday = document.getElementById('check-saturday');
    const checkSunday = document.getElementById('check-sunday');
    
    if (checkMonday) checkMonday.textContent = t.optionMonday;
    if (checkTuesday) checkTuesday.textContent = t.optionTuesday;
    if (checkWednesday) checkWednesday.textContent = t.optionWednesday;
    if (checkThursday) checkThursday.textContent = t.optionThursday;
    if (checkFriday) checkFriday.textContent = t.optionFriday;
    if (checkSaturday) checkSaturday.textContent = t.optionSaturday;
    if (checkSunday) checkSunday.textContent = t.optionSunday;
    
    // Update preset buttons
    const presetWeekdays = document.getElementById('preset-weekdays');
    const presetWeekends = document.getElementById('preset-weekends');
    const presetAll = document.getElementById('preset-all');
    
    if (presetWeekdays) presetWeekdays.textContent = t.weekdays;
    if (presetWeekends) presetWeekends.textContent = t.weekends;
    if (presetAll) presetAll.textContent = t.allDays;
    
    // Update placeholders with null checks
    const userId = document.getElementById('user-id');
    const playerName = document.getElementById('player-name');
    const searchInput = document.getElementById('search-input');
    if (userId) userId.placeholder = t.placeholderUserId;
    if (playerName) playerName.placeholder = t.placeholderName;
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    
    // Update search elements
    const searchTitle = document.getElementById('search-title');
    const searchBtn = document.getElementById('search-btn');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    
    if (searchTitle) searchTitle.textContent = t.searchTitle;
    if (searchBtn) searchBtn.textContent = t.searchBtn;
    if (clearSearchBtn) clearSearchBtn.textContent = t.clearSearchBtn;
    
    // Re-render matches with new language
    displayMatches();
}

// Initialize Supabase
function initSupabase() {
    // Check if Supabase is available
    if (typeof window.supabase === 'undefined') {
        console.warn('Supabase library not loaded. Using local file storage.');
        return null;
    }
    
    const SUPABASE_URL = 'https://wceftmdyguyqqssaywpl.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjZWZ0bWR5Z3V5cXFzc2F5d3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MjgyNDgsImV4cCI6MjA3MDAwNDI0OH0.P2yi4Xhg8YvXm0ID5dwrbrMPjTe1s4B3YnFb02lLiME';
    
    try {
        return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } catch (error) {
        console.error('Error initializing Supabase:', error);
        return null;
    }
}

// Generate unique ID with user ID and timestamp
function generateUniqueId(userId) {
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substr(2, 6);
    return `${userId}_${timestamp}_${randomSuffix}`;
}

// Get current user ID from form or stored value
function getCurrentUserId() {
    const userIdField = document.getElementById('user-id');
    if (userIdField && userIdField.value.trim()) {
        currentUserId = userIdField.value.trim();
        localStorage.setItem('current-user-id', currentUserId);
        return currentUserId;
    }
    
    // Try to get from localStorage
    const storedUserId = localStorage.getItem('current-user-id');
    if (storedUserId) {
        currentUserId = storedUserId;
        if (userIdField) userIdField.value = storedUserId;
        return storedUserId;
    }
    
    return null;
}

// Set current user ID
function setCurrentUserId(userId) {
    currentUserId = userId;
    localStorage.setItem('current-user-id', userId);
    const userIdField = document.getElementById('user-id');
    if (userIdField) userIdField.value = userId;
}

// Time overlap checking
function timeOverlap(start1, end1, start2, end2) {
    return start1 < end2 && start2 < end1;
}

// Rating compatibility (within 0.5 points)
function ratingCompatible(rating1, rating2) {
    return Math.abs(parseFloat(rating1) - parseFloat(rating2)) <= 0.5;
}

// Group matches by compatibility
function groupMatches(matchesData) {
    const groups = [];
    const processed = new Set();
    
    matchesData.forEach((match, index) => {
        if (processed.has(index)) return;
        
        const group = {
            day: match.day_of_week,
            matchType: match.match_type,
            startTime: match.start_time,
            endTime: match.end_time,
            players: [match],
            avgRating: parseFloat(match.ntrp_rating)
        };
        
        processed.add(index);
        
        // Find compatible matches (avoiding duplicates by user ID)
        matchesData.forEach((otherMatch, otherIndex) => {
            if (processed.has(otherIndex) || index === otherIndex) return;
            
            // Check if this user is already in the group
            const otherUserId = otherMatch.original_user_id || otherMatch.user_id;
            const isUserAlreadyInGroup = group.players.some(player => 
                (player.original_user_id || player.user_id) === otherUserId
            );
            
            if (!isUserAlreadyInGroup &&
                match.day_of_week === otherMatch.day_of_week &&
                match.match_type === otherMatch.match_type &&
                timeOverlap(match.start_time, match.end_time, otherMatch.start_time, otherMatch.end_time) &&
                ratingCompatible(match.ntrp_rating, otherMatch.ntrp_rating)) {
                
                group.players.push(otherMatch);
                processed.add(otherIndex);
                
                // Update time range to encompass all players
                group.startTime = group.startTime < otherMatch.start_time ? group.startTime : otherMatch.start_time;
                group.endTime = group.endTime > otherMatch.end_time ? group.endTime : otherMatch.end_time;
                
                // Update average rating
                const totalRating = group.players.reduce((sum, p) => sum + parseFloat(p.ntrp_rating), 0);
                group.avgRating = totalRating / group.players.length;
            }
        });
        
        groups.push(group);
    });
    
    // Sort groups with current user matches at the top
    const currentUser = getCurrentUserId();
    
    return groups.sort((a, b) => {
        // Check if current user is in each group
        const aHasCurrentUser = currentUser && a.players.some(player => 
            (player.original_user_id === currentUser || player.user_id === currentUser)
        );
        const bHasCurrentUser = currentUser && b.players.some(player => 
            (player.original_user_id === currentUser || player.user_id === currentUser)
        );
        
        // Prioritize groups with current user
        if (aHasCurrentUser && !bHasCurrentUser) return -1;
        if (!aHasCurrentUser && bHasCurrentUser) return 1;
        
        // If both or neither have current user, sort by day and time
        const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const dayDiff = dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
        if (dayDiff !== 0) return dayDiff;
        return a.startTime.localeCompare(b.startTime);
    });
}

// Display matches
function displayMatches() {
    const container = document.getElementById('matches-list');
    const t = TEXTS[currentLanguage];
    
    if (!container) return;
    
    // Filter matches based on current filter and search
    let filteredMatches = matches;
    
    // Apply day filter
    if (currentFilter === 'weekdays') {
        filteredMatches = filteredMatches.filter(match => 
            ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].includes(match.day_of_week)
        );
    } else if (currentFilter === 'weekends') {
        filteredMatches = filteredMatches.filter(match => 
            ['saturday', 'sunday'].includes(match.day_of_week)
        );
    }
    
    // Apply search filter
    if (isSearchActive && currentSearchTerm) {
        filteredMatches = filteredMatches.filter(match => {
            const playerName = (match.player_name || '').toLowerCase();
            const userId = (match.original_user_id || match.user_id || '').toLowerCase();
            return playerName.includes(currentSearchTerm) || userId.includes(currentSearchTerm);
        });
    }
    
    if (filteredMatches.length === 0) {
        const message = isSearchActive ? t.noSearchResults : t.emptyMsg;
        container.innerHTML = `<div class="empty-message">${message}</div>`;
        return;
    }
    
    const groups = groupMatches(filteredMatches);
    
    container.innerHTML = groups.map((group, groupIndex) => {
        const maxPlayers = group.matchType === 'singles' ? 2 : 4;
        const isFull = group.players.length >= maxPlayers;
        const dayKey = group.day && group.day.length >= 3 ? group.day.substring(0, 3) : 'mon';
        const dayShort = t[dayKey] || group.day || 'Mon';
        const spotsNeeded = maxPlayers - group.players.length;
        const matchTypeText = t[group.matchType] || group.matchType || 'Match';
        
        // Check if current user is in this group
        const currentUser = getCurrentUserId();
        const hasCurrentUser = currentUser && group.players.some(player => 
            (player.original_user_id === currentUser || player.user_id === currentUser)
        );
        
        return `
            <div class="match-group ${hasCurrentUser ? 'current-user-match' : ''}">
                <div class="match-header">
                    <div class="match-time">${dayShort} ${group.startTime}–${group.endTime}</div>
                    <div class="match-details">
                        <span class="player-count ${isFull ? 'full-group' : 'needs-players'}">
                            ${group.players.length} ${t.players}
                            ${!isFull ? ` (${spotsNeeded} ${spotsNeeded === 1 ? t.spot : t.spots} ${t.spotsLeft})` : ''}
                        </span>
                        <span>${matchTypeText}</span>
                        <span class="avg-rating">${t.avgRating}: ${group.avgRating.toFixed(1)}</span>
                        ${isFull ? `<span class="full-group">${t.fullGroup}</span>` : ''}
                        ${hasCurrentUser ? '<span class="current-user-indicator">👤 Your Match</span>' : ''}
                    </div>
                </div>
                <div class="players-list">
                    ${group.players.map(player => {
                        const playerName = player.player_name || player.name || 'Unknown Player';
                        const playerRating = player.ntrp_rating || player.rating || 'No rating';
                        const isCurrentUserPlayer = currentUser && (player.original_user_id === currentUser || player.user_id === currentUser);
                        const editButtons = !player.isDemo && isAdminMode ? 
                            `<span class="match-controls">
                                <button class="edit-btn" onclick="editMatch('${player.id}')" title="${t.editMatch}">✏️</button>
                                <button class="delete-btn" onclick="deleteMatch('${player.id}')" title="${t.deleteMatch}">❌</button>
                            </span>` : '';
                        return `<div class="player-item ${isCurrentUserPlayer ? 'current-user-player' : ''}">• ${playerName} (${playerRating}) ${editButtons}</div>`;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// Show message
function showMessage(message, isError = false) {
    const existingMsg = document.querySelector('.error-message, .success-message');
    if (existingMsg) existingMsg.remove();
    
    const msgDiv = document.createElement('div');
    msgDiv.className = isError ? 'error-message' : 'success-message';
    msgDiv.textContent = message;
    
    const form = document.getElementById('match-form');
    form.insertAdjacentElement('afterend', msgDiv);
    
    setTimeout(() => msgDiv.remove(), 5000);
}

// Local file storage functions
function saveMatchesToLocal() {
    try {
        const dataStr = JSON.stringify(matches.filter(m => !m.isDemo), null, 2);
        localStorage.setItem('tennis-matches-persistent', dataStr);
        console.log('Matches saved to local storage');
    } catch (error) {
        console.error('Error saving matches locally:', error);
    }
}

function loadMatchesFromLocal() {
    try {
        const stored = localStorage.getItem('tennis-matches-persistent');
        if (stored) {
            const loadedMatches = JSON.parse(stored);
            // Add loaded matches to current matches array
            loadedMatches.forEach(match => {
                if (!matches.find(m => m.id === match.id)) {
                    matches.push(match);
                }
            });
            console.log(`Loaded ${loadedMatches.length} matches from local storage`);
        }
    } catch (error) {
        console.error('Error loading matches from local storage:', error);
    }
}

// Load matches from storage/Supabase
async function loadMatches() {
    const container = document.getElementById('matches-list');
    const t = TEXTS[currentLanguage];
    if (container) container.innerHTML = `<div class="loading-message">${t.loadingMsg}</div>`;
    
    try {
        if (supabase) {
            console.log('Loading from Supabase...');
            // Load from Supabase
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
            
            const { data, error } = await supabase
                .from('tennis_matches')
                .select('*')
                .gte('created_at', oneWeekAgo.toISOString())
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            
            // Transform Supabase data to match our local format
            matches = (data || []).map(match => ({
                id: match.unique_id || (match.id ? match.id.toString() : null),
                original_user_id: match.user_id,
                user_id: match.user_id,
                player_name: match.player_name,
                ntrp_rating: match.ntrp_rating,
                match_type: match.match_type,
                day_of_week: match.day_of_week,
                start_time: match.start_time,
                end_time: match.end_time,
                created_at: match.created_at
            }));
            
            console.log(`Loaded ${matches.length} matches from Supabase`);
        } else {
            console.log('Loading from local storage...');
            // Load from local storage for persistence
            loadMatchesFromLocal();
        }
        
        displayMatches();
    } catch (error) {
        console.error('Error loading matches:', error);
        if (container) container.innerHTML = `<div class="error-message">${t.errorLoad}</div>`;
        // Try to load from local storage as fallback
        loadMatchesFromLocal();
        displayMatches();
    }
}

// Add new match - Create separate entries for each selected day
async function addMatch(matchData) {
    const t = TEXTS[currentLanguage];
    
    console.log('Adding match with data:', matchData);
    
    try {
        // Create a separate match entry for each selected day
        const userId = getCurrentUserId();
        if (!userId) {
            showMessage('Please enter a valid User ID', true);
            return;
        }
        
        const matchPromises = matchData.days_available.map(async (day, index) => {
            const newMatch = {
                player_name: matchData.player_name,
                ntrp_rating: matchData.ntrp_rating,
                match_type: matchData.match_type,
                day_of_week: day,
                start_time: matchData.start_time,
                end_time: matchData.end_time,
                created_at: new Date().toISOString(),
                id: generateUniqueId(userId),
                user_id: userId,
                original_user_id: matchData.user_id // Store the user-provided ID
            };
            
            console.log('Created match object for', day, ':', newMatch);
            
            return newMatch;
        });
        
        const newMatches = await Promise.all(matchPromises);
        
        if (supabase) {
            // Save to Supabase - insert all matches
            const supabaseMatches = newMatches.map(match => ({
                user_id: match.original_user_id,
                unique_id: match.id,
                player_name: match.player_name,
                ntrp_rating: parseFloat(match.ntrp_rating), // Ensure numeric
                match_type: match.match_type,
                day_of_week: match.day_of_week,
                start_time: match.start_time,
                end_time: match.end_time
            }));
            
            console.log('Inserting matches to Supabase:', supabaseMatches);
            
            const { error } = await supabase
                .from('tennis_matches')
                .insert(supabaseMatches);
            
            if (error) {
                console.error('Supabase insert error:', error);
                throw error;
            }
            
            console.log('Successfully inserted matches to Supabase');
            
            // Reload matches from server
            await loadMatches();
        } else {
            // Save to memory and local storage for persistence
            newMatches.forEach(match => matches.push(match));
            saveMatchesToLocal();
            displayMatches();
        }
        
        const dayCount = matchData.days_available.length;
        showMessage(`${t.successAdded.replace('slot', dayCount === 1 ? 'slot' : `${dayCount} slots`)}`);
        const form = document.getElementById('match-form');
        if (form) {
            form.reset();
            console.log('Form reset successfully');
        }
        
    } catch (error) {
        console.error('Error adding match:', error);
        showMessage(t.errorAdd, true);
    }
}

// Form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('match-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data using both FormData and direct element access
            const formData = new FormData(e.target);
            const form = e.target;
            
            // Get selected days from checkboxes
            const selectedDays = Array.from(form.querySelectorAll('input[name="days"]:checked'))
                .map(checkbox => checkbox.value);
            
            const matchData = {
                user_id: formData.get('user-id') || form.querySelector('#user-id').value,
                player_name: formData.get('player-name') || form.querySelector('#player-name').value,
                ntrp_rating: formData.get('ntrp-rating') || form.querySelector('#ntrp-rating').value,
                match_type: formData.get('match-type') || form.querySelector('#match-type').value,
                days_available: selectedDays,
                start_time: formData.get('start-time') || form.querySelector('#start-time').value,
                end_time: formData.get('end-time') || form.querySelector('#end-time').value
            };
            
            console.log('Form data captured:', matchData);
            console.log('FormData values:', {
                'player-name': formData.get('player-name'),
                'ntrp-rating': formData.get('ntrp-rating'),
                'match-type': formData.get('match-type'),
                'day-of-week': formData.get('day-of-week'),
                'start-time': formData.get('start-time'),
                'end-time': formData.get('end-time')
            });
            console.log('Direct element values:', {
                'player-name': form.querySelector('#player-name').value,
                'ntrp-rating': form.querySelector('#ntrp-rating').value,
                'match-type': form.querySelector('#match-type').value,
                'selected-days': selectedDays,
                'start-time': form.querySelector('#start-time').value,
                'end-time': form.querySelector('#end-time').value
            });
            
            // Validate required fields
            if (!matchData.user_id || !matchData.player_name || !matchData.ntrp_rating || !matchData.match_type || 
                !matchData.days_available || matchData.days_available.length === 0 || 
                !matchData.start_time || !matchData.end_time) {
                console.error('Missing required fields:', matchData);
                showMessage('Please fill in all required fields and select at least one day', true);
                return;
            }
            
            console.log('All fields validated successfully');
            
            // Validate end time is after start time
            if (matchData.start_time && matchData.end_time && matchData.start_time >= matchData.end_time) {
                showMessage('End time must be after start time', true);
                return;
            }
            
            await addMatch(matchData);
        });
    }
});

// Global filter state
let currentFilter = 'all';
let currentSearchTerm = '';
let isSearchActive = false;

// Filter matches by day type
function filterMatches(filterType) {
    currentFilter = filterType;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`filter-${filterType}`).classList.add('active');
    
    displayMatches();
}

// Search matches
function searchMatches() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        clearSearch();
        return;
    }
    
    currentSearchTerm = searchTerm;
    isSearchActive = true;
    
    // Update matches title to show search results
    const matchesTitle = document.getElementById('matches-title');
    const t = TEXTS[currentLanguage];
    if (matchesTitle) {
        matchesTitle.textContent = `🔍 ${t.searchResults}: "${searchTerm}"`;
    }
    
    displayMatches();
}

// Clear search
function clearSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    
    currentSearchTerm = '';
    isSearchActive = false;
    
    // Restore original matches title
    const matchesTitle = document.getElementById('matches-title');
    const t = TEXTS[currentLanguage];
    if (matchesTitle) {
        matchesTitle.textContent = t.matchesTitle;
    }
    
    displayMatches();
}

// Dark theme toggle
function toggleDarkTheme() {
    isDarkTheme = !isDarkTheme;
    const body = document.body;
    const themeBtn = document.getElementById('theme-btn');
    const t = TEXTS[currentLanguage];
    
    if (isDarkTheme) {
        body.classList.add('dark-theme');
        if (themeBtn) {
            themeBtn.textContent = '☀️';
            themeBtn.title = t.lightTheme;
        }
    } else {
        body.classList.remove('dark-theme');
        if (themeBtn) {
            themeBtn.textContent = '🌙';
            themeBtn.title = t.darkTheme;
        }
    }
    
    // Save preference
    localStorage.setItem('dark-theme', isDarkTheme.toString());
}

// Load dark theme preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem('dark-theme');
    if (savedTheme === 'true') {
        isDarkTheme = false; // Set to false so toggle switches it to true
        toggleDarkTheme();
    }
}

// Add Enter key support for search
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchMatches();
            }
        });
    }
    
    // Load theme preference
    loadThemePreference();
});

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize Supabase
    supabase = initSupabase();
    
    // Set language
    const savedLang = localStorage.getItem('preferred-language');
    currentLanguage = savedLang || detectLanguage();
    updateTexts();

    const t = TEXTS[currentLanguage];

    document.getElementById(`lang-${currentLanguage}`).classList.add('active');
    
    // Load stored user ID
    getCurrentUserId();
    
    // Load initial matches
    await loadMatches();
    
    // Set up real-time updates if using Supabase
    if (supabase) {
        supabase
            .channel('tennis_matches')
            .on('postgres_changes', 
                { event: '*', schema: 'public', table: 'tennis_matches' },
                () => loadMatches()
            )
            .subscribe();
    }
    
    // Update status with null check
    const currentStatus = document.getElementById('current-status');
    if (currentStatus) currentStatus.textContent = 'tennis-match-finder --ready';
    
    // Update system description
    const systemDesc = document.getElementById('system-description');
    if (systemDesc) {
        systemDesc.textContent = t.systemDescription;
    }
    
    // Set default day selection (weekdays) on first load
    const hasSelectedDays = document.querySelectorAll('input[name="days"]:checked').length > 0;
    if (!hasSelectedDays) {
        selectDayPreset('weekdays');
    }
});

// Demo data - Tennis players by country
const DEMO_PLAYERS = {
    en: [
        // Mixed doubles group - Monday 14:00-16:00
        { name: "Novak Djokovic", rating: "5.5", type: "doubles", day: "monday", start: "14:00", end: "16:00" },
        { name: "Aryna Sabalenka", rating: "5.5", type: "doubles", day: "monday", start: "14:00", end: "16:00" },
        { name: "Carlos Alcaraz", rating: "5.5", type: "doubles", day: "monday", start: "14:30", end: "16:30" },
        { name: "Iga Swiatek", rating: "5.5", type: "doubles", day: "monday", start: "14:30", end: "16:30" },
        
        // Singles group - Tuesday 10:00-12:00  
        { name: "Jannik Sinner", rating: "5.0", type: "singles", day: "tuesday", start: "10:00", end: "12:00" },
        { name: "Coco Gauff", rating: "5.0", type: "singles", day: "tuesday", start: "10:30", end: "12:30" },
        
        // Doubles group - Wednesday 17:00-19:00
        { name: "Daniil Medvedev", rating: "4.5", type: "doubles", day: "wednesday", start: "17:00", end: "19:00" },
        { name: "Jessica Pegula", rating: "4.5", type: "doubles", day: "wednesday", start: "17:00", end: "19:00" },
        { name: "Taylor Fritz", rating: "4.5", type: "doubles", day: "wednesday", start: "17:30", end: "19:30" },
        { name: "Emma Navarro", rating: "4.5", type: "doubles", day: "wednesday", start: "17:30", end: "19:30" }
    ],
    de: [
        // German players - Doubles Friday 15:00-17:00
        { name: "Alexander Zverev", rating: "5.5", type: "doubles", day: "friday", start: "15:00", end: "17:00" },
        { name: "Angelique Kerber", rating: "5.0", type: "doubles", day: "friday", start: "15:00", end: "17:00" },
        { name: "Jan-Lennard Struff", rating: "4.5", type: "doubles", day: "friday", start: "15:30", end: "17:30" },
        { name: "Laura Siegemund", rating: "4.5", type: "doubles", day: "friday", start: "15:30", end: "17:30" },
        
        // Singles Saturday 10:00-12:00
        { name: "Dominik Koepfer", rating: "4.0", type: "singles", day: "saturday", start: "10:00", end: "12:00" },
        { name: "Tatjana Maria", rating: "4.0", type: "singles", day: "saturday", start: "10:30", end: "12:30" },
        
        // More doubles Sunday 14:00-16:00
        { name: "Yannick Hanfmann", rating: "3.5", type: "doubles", day: "sunday", start: "14:00", end: "16:00" },
        { name: "Jule Niemeier", rating: "3.5", type: "doubles", day: "sunday", start: "14:00", end: "16:00" },
        { name: "Daniel Altmaier", rating: "3.5", type: "doubles", day: "sunday", start: "14:30", end: "16:30" },
        { name: "Eva Lys", rating: "3.5", type: "doubles", day: "sunday", start: "14:30", end: "16:30" }
    ],
    fr: [
        // French players - Doubles Thursday 16:00-18:00  
        { name: "Ugo Humbert", rating: "4.5", type: "doubles", day: "thursday", start: "16:00", end: "18:00" },
        { name: "Caroline Garcia", rating: "4.5", type: "doubles", day: "thursday", start: "16:00", end: "18:00" },
        { name: "Adrian Mannarino", rating: "4.0", type: "doubles", day: "thursday", start: "16:30", end: "18:30" },
        { name: "Alize Cornet", rating: "4.0", type: "doubles", day: "thursday", start: "16:30", end: "18:30" },
        
        // Singles Saturday 11:00-13:00
        { name: "Arthur Fils", rating: "4.0", type: "singles", day: "saturday", start: "11:00", end: "13:00" },
        { name: "Diane Parry", rating: "3.5", type: "singles", day: "saturday", start: "11:30", end: "13:30" },
        
        // More doubles Sunday 09:00-11:00
        { name: "Gael Monfils", rating: "4.5", type: "doubles", day: "sunday", start: "09:00", end: "11:00" },
        { name: "Kristina Mladenovic", rating: "4.0", type: "doubles", day: "sunday", start: "09:00", end: "11:00" },
        { name: "Corentin Moutet", rating: "3.5", type: "doubles", day: "sunday", start: "09:30", end: "11:30" },
        { name: "Oceane Dodin", rating: "3.5", type: "doubles", day: "sunday", start: "09:30", end: "11:30" }
    ],
    zh: [
        // Taiwanese and Chinese players - Doubles Tuesday 15:00-17:00  
        { name: "謝淑薇", rating: "4.5", type: "doubles", day: "tuesday", start: "15:00", end: "17:00" },
        { name: "張凱貞", rating: "4.0", type: "doubles", day: "tuesday", start: "15:00", end: "17:00" },
        { name: "王雅繁", rating: "4.0", type: "doubles", day: "tuesday", start: "15:30", end: "17:30" },
        { name: "朱琳", rating: "4.0", type: "doubles", day: "tuesday", start: "15:30", end: "17:30" },
        
        // Singles Wednesday 10:00-12:00
        { name: "鄭欽文", rating: "5.0", type: "singles", day: "wednesday", start: "10:00", end: "12:00" },
        { name: "袁悅", rating: "3.5", type: "singles", day: "wednesday", start: "10:30", end: "12:30" },
        
        // More doubles Saturday 14:00-16:00
        { name: "梁恩碩", rating: "3.5", type: "doubles", day: "saturday", start: "14:00", end: "16:00" },
        { name: "彭帥", rating: "4.5", type: "doubles", day: "saturday", start: "14:00", end: "16:00" },
        { name: "徐一璠", rating: "4.0", type: "doubles", day: "saturday", start: "14:30", end: "16:30" },
        { name: "楊釗煊", rating: "4.0", type: "doubles", day: "saturday", start: "14:30", end: "16:30" }
    ]
};

// Track demo state
let demoLoaded = false;

// Toggle demo players
function loadDemoPlayers() {
    const t = TEXTS[currentLanguage];
    
    if (demoLoaded) {
        // Remove all demo players
        matches = matches.filter(match => !match.isDemo);
        demoLoaded = false;
        displayMatches();
        showMessage('Demo players removed');
        
        // Update button text
        const demoBtn = document.querySelector('.demo-btn');
        if (demoBtn) demoBtn.innerHTML = '🎾 Demo';
    } else {
        // Add demo players for current language
        const demoPlayers = DEMO_PLAYERS[currentLanguage] || DEMO_PLAYERS.en;
        
        demoPlayers.forEach(player => {
            const matchData = {
                player_name: player.name,
                ntrp_rating: player.rating,
                match_type: player.type,
                day_of_week: player.day,
                start_time: player.start,
                end_time: player.end,
                created_at: Date.now(),
                id: Date.now().toString() + Math.random(),
                isDemo: true
            };
            matches.push(matchData);
        });
        
        demoLoaded = true;
        displayMatches();
        showMessage(`${demoPlayers.length} demo players added`);
        
        // Update button text
        const demoBtn = document.querySelector('.demo-btn');
        if (demoBtn) demoBtn.innerHTML = '🚫 Clear Demo';
    }
}


// Day preset selection functions
function selectDayPreset(preset) {
    const checkboxes = document.querySelectorAll('input[name="days"]');
    
    // Clear all checkboxes first
    checkboxes.forEach(cb => cb.checked = false);
    
    // Remove active class from all preset buttons
    document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
    
    // Select days based on preset
    if (preset === 'weekdays') {
        ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].forEach(day => {
            const checkbox = document.getElementById(`day-${day}`);
            if (checkbox) checkbox.checked = true;
        });
        document.getElementById('preset-weekdays').classList.add('active');
    } else if (preset === 'weekends') {
        ['saturday', 'sunday'].forEach(day => {
            const checkbox = document.getElementById(`day-${day}`);
            if (checkbox) checkbox.checked = true;
        });
        document.getElementById('preset-weekends').classList.add('active');
    } else if (preset === 'all') {
        checkboxes.forEach(cb => cb.checked = true);
        document.getElementById('preset-all').classList.add('active');
    }
}

// Download matches as JSON
function downloadMatches() {
    const dataStr = JSON.stringify(matches, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tennis-matches.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Upload matches from JSON file
function uploadMatches(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const uploadedMatches = JSON.parse(e.target.result);
            if (Array.isArray(uploadedMatches)) {
                matches = uploadedMatches;
                displayMatches();
                showMessage('Matches loaded successfully!');
            } else {
                showMessage('Invalid JSON format', true);
            }
        } catch (error) {
            showMessage('Error parsing JSON file', true);
        }
    };
    reader.readAsText(file);
}

// Export functions for global access
// Admin mode toggle
function toggleAdminMode() {
    const t = TEXTS[currentLanguage];
    
    if (!isAdminMode) {
        const password = prompt(t.adminPassword);
        if (password === 'admin123') {
            isAdminMode = true;
            updateAdminUI();
            showMessage(t.adminModeActive);
            createAdminPanel();
            displayMatches(); // Refresh to show edit/delete buttons
        } else {
            showMessage(t.wrongPassword, true);
        }
    } else {
        isAdminMode = false;
        updateAdminUI();
        removeAdminPanel();
        displayMatches(); // Refresh to hide edit/delete buttons
    }
}

// Update admin UI
function updateAdminUI() {
    const t = TEXTS[currentLanguage];
    const adminBtn = document.getElementById('admin-btn');
    const terminal = document.querySelector('.terminal');
    
    if (adminBtn) {
        if (isAdminMode) {
            adminBtn.innerHTML = '🔓 ' + t.exitAdmin;
            adminBtn.style.background = '#e74c3c';
            adminBtn.style.borderColor = '#e74c3c';
        } else {
            adminBtn.innerHTML = '🔐 ' + t.adminMode;
            adminBtn.style.background = '#6c757d';
            adminBtn.style.borderColor = '#6c757d';
        }
    }
    
    // Add visual indicator for admin mode
    if (terminal) {
        if (isAdminMode) {
            terminal.classList.add('admin-mode');
        } else {
            terminal.classList.remove('admin-mode');
        }
    }
}

// Edit match function
function editMatch(matchId) {
    const match = matches.find(m => m.id === matchId);
    if (!match) return;
    
    const t = TEXTS[currentLanguage];
    
    // Create edit form in a modal
    const modalHtml = `
        <div class="modal-overlay" id="edit-modal">
            <div class="modal-content">
                <h3>${t.editMatch}</h3>
                <form id="edit-form">
                    <div class="form-row">
                        <label>${t.labelUserId}</label>
                        <input type="text" id="edit-user-id" value="${match.original_user_id || match.user_id || ''}" required>
                    </div>
                    <div class="form-row">
                        <label>${t.labelName}</label>
                        <input type="text" id="edit-name" value="${match.player_name}" required>
                    </div>
                    <div class="form-row">
                        <label>${t.labelRating}</label>
                        <select id="edit-rating" required>
                            <option value="2.0" ${match.ntrp_rating === '2.0' ? 'selected' : ''}>2.0</option>
                            <option value="2.5" ${match.ntrp_rating === '2.5' ? 'selected' : ''}>2.5</option>
                            <option value="3.0" ${match.ntrp_rating === '3.0' ? 'selected' : ''}>3.0</option>
                            <option value="3.5" ${match.ntrp_rating === '3.5' ? 'selected' : ''}>3.5</option>
                            <option value="4.0" ${match.ntrp_rating === '4.0' ? 'selected' : ''}>4.0</option>
                            <option value="4.5" ${match.ntrp_rating === '4.5' ? 'selected' : ''}>4.5</option>
                            <option value="5.0" ${match.ntrp_rating === '5.0' ? 'selected' : ''}>5.0</option>
                            <option value="5.5" ${match.ntrp_rating === '5.5' ? 'selected' : ''}>5.5</option>
                            <option value="6.0" ${match.ntrp_rating === '6.0' ? 'selected' : ''}>6.0</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label>${t.labelType}</label>
                        <select id="edit-type" required>
                            <option value="singles" ${match.match_type === 'singles' ? 'selected' : ''}>${t.optionSingles}</option>
                            <option value="doubles" ${match.match_type === 'doubles' ? 'selected' : ''}>${t.optionDoubles}</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label>${t.labelStart}</label>
                        <input type="time" id="edit-start" value="${match.start_time}" required>
                    </div>
                    <div class="form-row">
                        <label>${t.labelEnd}</label>
                        <input type="time" id="edit-end" value="${match.end_time}" required>
                    </div>
                    <div class="modal-buttons">
                        <button type="submit">${t.updateMatch}</button>
                        <button type="button" onclick="closeEditModal()">${t.cancelEdit}</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Handle form submission
    document.getElementById('edit-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        await updateMatch(matchId, {
            original_user_id: document.getElementById('edit-user-id').value,
            user_id: document.getElementById('edit-user-id').value,
            player_name: document.getElementById('edit-name').value,
            ntrp_rating: document.getElementById('edit-rating').value,
            match_type: document.getElementById('edit-type').value,
            start_time: document.getElementById('edit-start').value,
            end_time: document.getElementById('edit-end').value
        });
    });
}

// Close edit modal
function closeEditModal() {
    const modal = document.getElementById('edit-modal');
    if (modal) modal.remove();
}

// Update match
async function updateMatch(matchId, updateData) {
    const t = TEXTS[currentLanguage];
    
    try {
        // Find and update the match
        const matchIndex = matches.findIndex(m => m.id === matchId);
        if (matchIndex === -1) throw new Error('Match not found');
        
        // Update the match object
        matches[matchIndex] = { ...matches[matchIndex], ...updateData };
        
        if (supabase) {
            // Update in Supabase using unique_id
            const { error } = await supabase
                .from('tennis_matches')
                .update({
                    user_id: updateData.original_user_id || updateData.user_id,
                    player_name: updateData.player_name,
                    ntrp_rating: parseFloat(updateData.ntrp_rating), // Ensure numeric
                    match_type: updateData.match_type,
                    start_time: updateData.start_time,
                    end_time: updateData.end_time
                })
                .eq('unique_id', matchId);
            
            if (error) {
                console.error('Supabase update error:', error);
                throw error;
            }
            
            console.log('Successfully updated match in Supabase');
            
            // Reload matches from Supabase to get fresh data
            await loadMatches();
        } else {
            // Update in local storage
            saveMatchesToLocal();
            displayMatches();
        }
        
        // Refresh admin results if currently searching
        const searchInput = document.getElementById('admin-search-user');
        if (searchInput && isAdminMode && searchInput.value.trim()) {
            searchByUserIdAsync().catch(error => console.error('Error refreshing admin results:', error));
        }
        
        closeEditModal();
        showMessage(t.matchUpdated);
        
    } catch (error) {
        console.error('Error updating match:', error);
        showMessage(t.errorUpdate, true);
    }
}

// Delete match
async function deleteMatch(matchId) {
    const t = TEXTS[currentLanguage];
    
    if (!confirm(t.confirmDelete)) return;
    
    try {
        if (supabase) {
            // Delete from Supabase using unique_id
            const { error } = await supabase
                .from('tennis_matches')
                .delete()
                .eq('unique_id', matchId);
            
            if (error) {
                console.error('Supabase delete error:', error);
                throw error;
            }
            
            console.log('Successfully deleted match from Supabase');
            
            // Reload matches from Supabase to get fresh data
            await loadMatches();
        } else {
            // Delete from local array
            matches = matches.filter(m => m.id !== matchId);
            saveMatchesToLocal();
            displayMatches();
        }
        
        // Refresh admin results if currently searching
        const searchInput = document.getElementById('admin-search-user');
        if (searchInput && isAdminMode && searchInput.value.trim()) {
            searchByUserIdAsync().catch(error => console.error('Error refreshing admin results:', error));
        }
        
        showMessage(t.matchDeleted);
        
    } catch (error) {
        console.error('Error deleting match:', error);
        showMessage(t.errorDelete, true);
    }
}

// Create admin panel
function createAdminPanel() {
    const existingPanel = document.getElementById('admin-panel');
    if (existingPanel) return; // Panel already exists
    
    const adminPanelHtml = `
        <div id="admin-panel" class="admin-panel">
            <h3>🔐 Admin Panel</h3>
            <div class="admin-controls">
                <div class="admin-search">
                    <input type="text" id="admin-search-user" placeholder="Search by User ID" />
                    <button onclick="searchByUserId()" class="admin-btn">Search</button>
                    <button onclick="showAllMatches()" class="admin-btn">Show All</button>
                </div>
                <div class="admin-actions">
                    <button onclick="bulkDeleteByUser()" class="admin-btn danger">Delete User's Matches</button>
                    <button onclick="exportUserMatches()" class="admin-btn">Export User Data</button>
                    <button onclick="showUserStats()" class="admin-btn">User Statistics</button>
                </div>
            </div>
            <div id="admin-results" class="admin-results"></div>
        </div>
    `;
    
    // Insert admin panel before the matches section
    const matchesList = document.getElementById('matches-list');
    const matchesSection = matchesList ? matchesList.closest('.section') : null;
    if (matchesSection) {
        matchesSection.insertAdjacentHTML('beforebegin', adminPanelHtml);
    } else {
        // Fallback: insert after the filter section
        const filterSection = document.querySelector('.filter-section');
        if (filterSection) {
            filterSection.insertAdjacentHTML('afterend', adminPanelHtml);
        } else {
            // Last fallback: insert in terminal body
            const terminalBody = document.querySelector('.terminal-body');
            if (terminalBody) {
                const firstSection = terminalBody.querySelector('.section');
                if (firstSection) {
                    firstSection.insertAdjacentHTML('afterend', adminPanelHtml);
                }
            }
        }
    }
}

// Remove admin panel
function removeAdminPanel() {
    const panel = document.getElementById('admin-panel');
    if (panel) panel.remove();
}

// Search matches by user ID
async function searchByUserIdAsync() {
    const searchInput = document.getElementById('admin-search-user');
    const userId = searchInput.value.trim();
    
    if (!userId) {
        showMessage('Please enter a User ID to search', true);
        return;
    }
    
    let userMatches = [];
    
    if (supabase) {
        try {
            // Search in Supabase
            const { data, error } = await supabase
                .from('tennis_matches')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            
            // Transform Supabase data to match our local format
            userMatches = (data || []).map(match => ({
                id: match.unique_id || (match.id ? match.id.toString() : null),
                original_user_id: match.user_id,
                user_id: match.user_id,
                player_name: match.player_name,
                ntrp_rating: match.ntrp_rating,
                match_type: match.match_type,
                day_of_week: match.day_of_week,
                start_time: match.start_time,
                end_time: match.end_time,
                created_at: match.created_at
            }));
            
            console.log(`Found ${userMatches.length} matches for user ${userId} in Supabase`);
        } catch (error) {
            console.error('Error searching Supabase:', error);
            showMessage('Error searching database', true);
            return;
        }
    } else {
        // Search in local matches
        userMatches = matches.filter(match => 
            match.original_user_id === userId || match.user_id === userId
        );
    }
    
    displayAdminResults(userMatches, `Matches for User ID: ${userId}`);
}

// Show all matches in admin view
function showAllMatches() {
    displayAdminResults(matches, 'All Matches');
}

// Display admin search results
function displayAdminResults(matchesData, title) {
    const resultsDiv = document.getElementById('admin-results');
    if (!resultsDiv) return;
    
    if (matchesData.length === 0) {
        resultsDiv.innerHTML = `<p class="admin-message">No matches found for ${title}</p>`;
        return;
    }
    
    const resultsHtml = `
        <h4>${title} (${matchesData.length} matches)</h4>
        <div class="admin-matches-list">
            ${matchesData.map(match => `
                <div class="admin-match-item">
                    <div class="admin-match-info">
                        <strong>ID:</strong> ${match.id}<br>
                        <strong>User ID:</strong> ${match.original_user_id || match.user_id}<br>
                        <strong>Player:</strong> ${match.player_name}<br>
                        <strong>Rating:</strong> ${match.ntrp_rating}<br>
                        <strong>Type:</strong> ${match.match_type}<br>
                        <strong>Day:</strong> ${match.day_of_week}<br>
                        <strong>Time:</strong> ${match.start_time} - ${match.end_time}<br>
                        <strong>Created:</strong> ${new Date(match.created_at).toLocaleString()}
                    </div>
                    <div class="admin-match-actions">
                        <button onclick="editMatch('${match.id}')" class="admin-btn small">Edit</button>
                        <button onclick="deleteMatch('${match.id}')" class="admin-btn small danger">Delete</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    resultsDiv.innerHTML = resultsHtml;
}

// Bulk delete matches by user ID
async function bulkDeleteByUserAsync() {
    const searchInput = document.getElementById('admin-search-user');
    const userId = searchInput.value.trim();
    
    if (!userId) {
        showMessage('Please enter a User ID to delete matches for', true);
        return;
    }
    
    const userMatches = matches.filter(match => 
        match.original_user_id === userId || match.user_id === userId
    );
    
    if (userMatches.length === 0) {
        showMessage(`No matches found for User ID: ${userId}`, true);
        return;
    }
    
    if (!confirm(`Delete all ${userMatches.length} matches for User ID: ${userId}?`)) {
        return;
    }
    
    try {
        if (supabase) {
            // Bulk delete from Supabase using user_id
            const { error } = await supabase
                .from('tennis_matches')
                .delete()
                .eq('user_id', userId);
            
            if (error) {
                console.error('Supabase bulk delete error:', error);
                throw error;
            }
            
            console.log(`Successfully deleted ${userMatches.length} matches from Supabase`);
            
            // Reload matches from Supabase to get fresh data
            await loadMatches();
        } else {
            // Remove matches from local array
            matches = matches.filter(match => 
                match.original_user_id !== userId && match.user_id !== userId
            );
            
            saveMatchesToLocal();
            displayMatches();
        }
        
        displayAdminResults([], `Deleted matches for User ID: ${userId}`);
        showMessage(`Successfully deleted ${userMatches.length} matches for User ID: ${userId}`);
        
    } catch (error) {
        console.error('Error during bulk delete:', error);
        showMessage(`Error deleting matches for User ID: ${userId}`, true);
    }
}

// Export user matches
async function exportUserMatchesAsync() {
    const searchInput = document.getElementById('admin-search-user');
    const userId = searchInput.value.trim();
    
    if (!userId) {
        showMessage('Please enter a User ID to export matches for', true);
        return;
    }
    
    let userMatches = [];
    
    if (supabase) {
        try {
            // Get fresh data from Supabase for export
            const { data, error } = await supabase
                .from('tennis_matches')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            
            userMatches = data || [];
            console.log(`Fetched ${userMatches.length} matches for export from Supabase`);
        } catch (error) {
            console.error('Error fetching data for export:', error);
            showMessage('Error fetching data for export', true);
            return;
        }
    } else {
        // Use local matches
        userMatches = matches.filter(match => 
            match.original_user_id === userId || match.user_id === userId
        );
    }
    
    if (userMatches.length === 0) {
        showMessage(`No matches found for User ID: ${userId}`, true);
        return;
    }
    
    const dataStr = JSON.stringify(userMatches, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tennis-matches-${userId}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showMessage(`Exported ${userMatches.length} matches for User ID: ${userId}`);
}

// Show user statistics
function showUserStats() {
    const userStats = {};
    
    matches.forEach(match => {
        const userId = match.original_user_id || match.user_id || 'Unknown';
        if (!userStats[userId]) {
            userStats[userId] = {
                count: 0,
                playerName: match.player_name,
                averageRating: 0,
                totalRating: 0,
                matchTypes: new Set(),
                days: new Set()
            };
        }
        
        userStats[userId].count++;
        userStats[userId].totalRating += parseFloat(match.ntrp_rating);
        userStats[userId].matchTypes.add(match.match_type);
        userStats[userId].days.add(match.day_of_week);
    });
    
    // Calculate averages
    Object.keys(userStats).forEach(userId => {
        userStats[userId].averageRating = (userStats[userId].totalRating / userStats[userId].count).toFixed(1);
        userStats[userId].matchTypes = Array.from(userStats[userId].matchTypes).join(', ');
        userStats[userId].days = Array.from(userStats[userId].days).join(', ');
    });
    
    const statsHtml = `
        <h4>User Statistics (${Object.keys(userStats).length} users)</h4>
        <div class="admin-stats-list">
            ${Object.entries(userStats).map(([userId, stats]) => `
                <div class="admin-stats-item">
                    <strong>User ID:</strong> ${userId}<br>
                    <strong>Player Name:</strong> ${stats.playerName}<br>
                    <strong>Total Matches:</strong> ${stats.count}<br>
                    <strong>Avg Rating:</strong> ${stats.averageRating}<br>
                    <strong>Match Types:</strong> ${stats.matchTypes}<br>
                    <strong>Days:</strong> ${stats.days}
                </div>
            `).join('')}
        </div>
    `;
    
    const resultsDiv = document.getElementById('admin-results');
    if (resultsDiv) {
        resultsDiv.innerHTML = statsHtml;
    }
}

// Wrapper functions for HTML onclick handlers (to handle async)
function handleSearchByUserId() {
    searchByUserIdAsync().catch(error => {
        console.error('Error searching by user ID:', error);
        showMessage('Error searching for user', true);
    });
}

function handleExportUserMatches() {
    exportUserMatchesAsync().catch(error => {
        console.error('Error exporting user matches:', error);
        showMessage('Error exporting data', true);
    });
}

function handleBulkDeleteByUser() {
    bulkDeleteByUserAsync().catch(error => {
        console.error('Error bulk deleting:', error);
        showMessage('Error deleting matches', true);
    });
}

// Export functions for global access
window.changeLanguage = changeLanguage;
window.loadDemoPlayers = loadDemoPlayers;
window.downloadMatches = downloadMatches;
window.uploadMatches = uploadMatches;
window.filterMatches = filterMatches;
window.selectDayPreset = selectDayPreset;
window.toggleAdminMode = toggleAdminMode;
window.editMatch = editMatch;
window.deleteMatch = deleteMatch;
window.closeEditModal = closeEditModal;
window.searchByUserId = handleSearchByUserId;
window.showAllMatches = showAllMatches;
window.bulkDeleteByUser = handleBulkDeleteByUser;
window.exportUserMatches = handleExportUserMatches;
window.showUserStats = showUserStats;
window.searchMatches = searchMatches;
window.clearSearch = clearSearch;
window.toggleDarkTheme = toggleDarkTheme;
