-- Updated Supabase schema for Tennis Match Finder
-- This schema supports the new multi-day selection feature

-- Drop existing table if you need to recreate it
-- DROP TABLE IF EXISTS tennis_matches;

-- Create the tennis_matches table
CREATE TABLE tennis_matches (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id TEXT NOT NULL, -- User-provided ID for tracking and admin operations
    unique_id TEXT NOT NULL UNIQUE, -- System-generated unique ID with timestamp
    player_name TEXT NOT NULL,
    ntrp_rating DECIMAL(2,1) NOT NULL CHECK (ntrp_rating >= 1.0 AND ntrp_rating <= 7.0),
    match_type TEXT NOT NULL CHECK (match_type IN ('singles', 'doubles')),
    day_of_week TEXT NOT NULL CHECK (day_of_week IN ('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL CHECK (end_time > start_time),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Additional constraints
    CONSTRAINT valid_time_range CHECK (
        start_time >= '06:00' AND end_time <= '23:00'
    )
);

-- Enable Row Level Security
ALTER TABLE tennis_matches ENABLE ROW LEVEL SECURITY;

-- Allow all operations for anonymous users (since no login required)
CREATE POLICY "Allow all operations" ON tennis_matches
    FOR ALL USING (true) WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_tennis_matches_day_time ON tennis_matches (day_of_week, start_time, end_time);
CREATE INDEX idx_tennis_matches_type_rating ON tennis_matches (match_type, ntrp_rating);
CREATE INDEX idx_tennis_matches_created_at ON tennis_matches (created_at);
CREATE INDEX idx_tennis_matches_user_id ON tennis_matches (user_id);
CREATE INDEX idx_tennis_matches_unique_id ON tennis_matches (unique_id);

-- Enable realtime for the table (run this in Supabase dashboard)
-- ALTER PUBLICATION supabase_realtime ADD TABLE tennis_matches;

-- Sample data for testing
INSERT INTO tennis_matches (user_id, unique_id, player_name, ntrp_rating, match_type, day_of_week, start_time, end_time) VALUES
('john123', 'john123_1672531200000_abc123', 'John Doe', 4.0, 'singles', 'monday', '18:00', '20:00'),
('jane456', 'jane456_1672531260000_def456', 'Jane Smith', 4.0, 'singles', 'monday', '18:30', '20:30'),
('mike789', 'mike789_1672531320000_ghi789', 'Mike Johnson', 3.5, 'doubles', 'tuesday', '17:00', '19:00'),
('sarah101', 'sarah101_1672531380000_jkl101', 'Sarah Wilson', 3.5, 'doubles', 'tuesday', '17:30', '19:30'),
('chris202', 'chris202_1672531440000_mno202', 'Chris Brown', 4.5, 'singles', 'wednesday', '19:00', '21:00');

-- Query examples:

-- Find all matches for a specific day
-- SELECT * FROM tennis_matches WHERE day_of_week = 'monday' ORDER BY start_time;

-- Find compatible players (same type, similar rating, overlapping time)
-- SELECT * FROM tennis_matches 
-- WHERE match_type = 'singles' 
-- AND ntrp_rating BETWEEN 3.5 AND 4.5 
-- AND day_of_week = 'monday'
-- AND start_time < '20:30' AND end_time > '18:00'
-- ORDER BY start_time;

-- Clean up old matches (older than 1 week)
-- DELETE FROM tennis_matches WHERE created_at < NOW() - INTERVAL '7 days';