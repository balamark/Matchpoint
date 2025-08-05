# 🎾 Tennis Terminal - Match Finder

A retro terminal-style webapp for finding tennis partners. No login required, multi-language support, and real-time match grouping.

## Features

- **No Login Required**: Just enter your details and find matches
- **Multi-Language**: Auto-detects browser language (EN/DE/FR)
- **Smart Grouping**: Groups compatible players by day, time, skill level, and match type
- **Real-time Updates**: See new matches as they're added
- **Terminal UI**: Retro green-on-black aesthetic with VT323 font
- **Responsive**: Works on desktop and mobile

## Quick Start

1. Open `index.html` in a web browser
2. The app works offline using localStorage by default
3. For production, configure Supabase (see Setup section)

## Setup

### Local Development
Simply open `index.html` in your browser. The app will use localStorage for data persistence.

### Production with Supabase

1. Create a new Supabase project at [supabase.com](https://supabase.com)

2. Create the database table:
```sql
CREATE TABLE tennis_matches (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    player_name TEXT NOT NULL,
    ntrp_rating DECIMAL(2,1) NOT NULL,
    match_type TEXT NOT NULL CHECK (match_type IN ('singles', 'doubles')),
    day_of_week TEXT NOT NULL CHECK (day_of_week IN ('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE tennis_matches ENABLE ROW LEVEL SECURITY;

-- Allow all operations for anonymous users (since no login required)
CREATE POLICY "Allow all operations" ON tennis_matches
    FOR ALL USING (true) WITH CHECK (true);
```

3. Update `script.js` with your Supabase credentials:
```javascript
const SUPABASE_URL = 'your-supabase-url';
const SUPABASE_ANON_KEY = 'your-supabase-anon-key';
```

4. Enable Realtime for the table in your Supabase dashboard

## How It Works

### Match Grouping Logic
Players are grouped together when they have:
- Same day of the week
- Overlapping time ranges
- Same match type (singles/doubles)
- Compatible NTRP ratings (±0.5 points)

### Display Format
```
Mon 17:00–19:00 | Double | Players: 3 | Avg NTRP: 3.4
Tue 18:00–20:00 | Single | Players: 2 | Avg NTRP: 3.0
Wed 17:00–19:00 | Double | ✅ Full Group (4)
```

### Languages Supported
- **English** (default)
- **German** (Deutsch)
- **French** (Français)

Language is auto-detected from browser settings or can be manually selected.

## File Structure
```
Matchpoint/
├── index.html          # Main HTML structure
├── styles.css          # Terminal-style CSS
├── script.js           # JavaScript logic
└── README.md           # This file
```

## Customization

### Adding Languages
1. Add translations to the `TEXTS` object in `script.js`
2. Add language detection logic in `detectLanguage()`
3. Add language button in the HTML

### Styling
- Modify `styles.css` to change the terminal appearance
- Colors, fonts, and layout are easily customizable
- All terminal elements use CSS custom properties

### Match Logic
- Adjust rating compatibility in `ratingCompatible()`
- Modify time overlap logic in `timeOverlap()`
- Change group display in `displayMatches()`

## Browser Compatibility
- Modern browsers with ES6+ support
- CSS Grid and Flexbox required
- Works offline with localStorage
- Progressive enhancement with Supabase

## Contributing
Feel free to submit issues and enhancement requests!

## License
MIT License - feel free to use and modify as needed.