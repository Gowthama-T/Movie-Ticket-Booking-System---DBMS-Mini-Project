-- Seed data for CineSphere

-- Insert sample users
INSERT INTO users (email, password_hash, first_name, last_name, phone, is_admin) VALUES
('admin@cinesphere.com', '$2b$10$hash', 'Admin', 'User', '+91-9876543210', TRUE),
('john.doe@email.com', '$2b$10$hash', 'John', 'Doe', '+91-9876543211', FALSE),
('sarah.wilson@email.com', '$2b$10$hash', 'Sarah', 'Wilson', '+91-9876543212', FALSE),
('mike.johnson@email.com', '$2b$10$hash', 'Mike', 'Johnson', '+91-9876543213', FALSE);

-- Insert sample movies
INSERT INTO movies (title, description, genre, duration, rating, language, release_date, director, cast, poster_url, backdrop_url, price) VALUES
('Avengers: Endgame', 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.', 'Action,Adventure,Drama', 181, 8.4, 'English', '2019-04-26', 'Anthony Russo, Joe Russo', 'Robert Downey Jr.,Chris Evans,Mark Ruffalo,Chris Hemsworth', '/placeholder.svg', '/placeholder.svg', 250.00),
('Spider-Man: No Way Home', 'With Spider-Mans identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.', 'Action,Adventure,Sci-Fi', 148, 8.2, 'English', '2021-12-17', 'Jon Watts', 'Tom Holland,Zendaya,Benedict Cumberbatch', '/placeholder.svg', '/placeholder.svg', 280.00),
('The Batman', 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the citys hidden corruption.', 'Action,Crime,Drama', 176, 7.8, 'English', '2022-03-04', 'Matt Reeves', 'Robert Pattinson,Zoë Kravitz,Jeffrey Wright', '/placeholder.svg', '/placeholder.svg', 300.00),
('Top Gun: Maverick', 'After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.', 'Action,Drama', 130, 8.3, 'English', '2022-05-27', 'Joseph Kosinski', 'Tom Cruise,Miles Teller,Jennifer Connelly', '/placeholder.svg', '/placeholder.svg', 270.00);

-- Insert sample theaters
INSERT INTO theaters (name, location, city, address, total_screens, facilities) VALUES
('PVR Cinemas - Phoenix Mall', 'Velachery', 'Chennai', 'Phoenix MarketCity, Velachery, Chennai', 8, 'IMAX,Dolby Atmos,Parking,Food Court'),
('INOX - Express Avenue', 'Royapettah', 'Chennai', 'Express Avenue Mall, Royapettah, Chennai', 6, '4DX,Parking,Food Court,Gaming Zone'),
('AGS Cinemas - OMR', 'Navalur', 'Chennai', 'OMR Road, Navalur, Chennai', 5, 'Recliner Seats,Parking,Cafe');

-- Insert sample screens
INSERT INTO screens (theater_id, screen_name, total_seats, screen_type) VALUES
(1, 'Screen 1', 200, '2D'),
(1, 'Screen 2', 180, '3D'),
(1, 'Screen 3', 150, 'IMAX'),
(2, 'Screen 1', 220, '2D'),
(2, 'Screen 2', 200, '3D'),
(2, 'Screen 3', 120, '4DX'),
(3, 'Screen 1', 160, '2D'),
(3, 'Screen 2', 140, '3D');

-- Insert sample seats for Screen 1 of Theater 1
INSERT INTO seats (screen_id, row_name, seat_number, seat_type, price) VALUES
-- Row A (Regular seats)
(1, 'A', 1, 'Regular', 200.00), (1, 'A', 2, 'Regular', 200.00), (1, 'A', 3, 'Regular', 200.00),
(1, 'A', 4, 'Regular', 200.00), (1, 'A', 5, 'Regular', 200.00), (1, 'A', 6, 'Regular', 200.00),
(1, 'A', 7, 'Regular', 200.00), (1, 'A', 8, 'Regular', 200.00), (1, 'A', 9, 'Regular', 200.00),
(1, 'A', 10, 'Regular', 200.00), (1, 'A', 11, 'Regular', 200.00), (1, 'A', 12, 'Regular', 200.00),
-- Row B (Regular seats)
(1, 'B', 1, 'Regular', 200.00), (1, 'B', 2, 'Regular', 200.00), (1, 'B', 3, 'Regular', 200.00),
(1, 'B', 4, 'Regular', 200.00), (1, 'B', 5, 'Regular', 200.00), (1, 'B', 6, 'Regular', 200.00),
(1, 'B', 7, 'Regular', 200.00), (1, 'B', 8, 'Regular', 200.00), (1, 'B', 9, 'Regular', 200.00),
(1, 'B', 10, 'Regular', 200.00), (1, 'B', 11, 'Regular', 200.00), (1, 'B', 12, 'Regular', 200.00),
-- Premium seats (D, E, F rows)
(1, 'D', 1, 'Premium', 250.00), (1, 'D', 2, 'Premium', 250.00), (1, 'D', 3, 'Premium', 250.00),
(1, 'D', 4, 'Premium', 250.00), (1, 'D', 5, 'Premium', 250.00), (1, 'D', 6, 'Premium', 250.00),
(1, 'D', 7, 'Premium', 250.00), (1, 'D', 8, 'Premium', 250.00), (1, 'D', 9, 'Premium', 250.00),
(1, 'D', 10, 'Premium', 250.00), (1, 'D', 11, 'Premium', 250.00), (1, 'D', 12, 'Premium', 250.00),
-- Recliner seats (G, H rows)
(1, 'G', 1, 'Recliner', 300.00), (1, 'G', 2, 'Recliner', 300.00), (1, 'G', 3, 'Recliner', 300.00),
(1, 'G', 4, 'Recliner', 300.00), (1, 'G', 5, 'Recliner', 300.00), (1, 'G', 6, 'Recliner', 300.00),
(1, 'G', 7, 'Recliner', 300.00), (1, 'G', 8, 'Recliner', 300.00);

-- Insert sample showtimes
INSERT INTO showtimes (movie_id, screen_id, show_date, show_time, price) VALUES
-- Avengers: Endgame showtimes
(1, 1, '2024-01-15', '10:00:00', 200.00),
(1, 1, '2024-01-15', '13:30:00', 250.00),
(1, 1, '2024-01-15', '17:00:00', 300.00),
(1, 1, '2024-01-15', '20:30:00', 350.00),
-- Spider-Man showtimes
(2, 2, '2024-01-15', '11:00:00', 220.00),
(2, 2, '2024-01-15', '14:30:00', 270.00),
(2, 2, '2024-01-15', '18:00:00', 320.00),
(2, 2, '2024-01-15', '21:30:00', 380.00);

-- Insert sample reviews
INSERT INTO reviews (user_id, movie_id, rating, review_text, helpful_count, not_helpful_count, is_verified) VALUES
(2, 1, 5, 'Absolutely incredible movie! The visual effects were stunning and the storyline was perfectly executed. A must-watch for all Marvel fans.', 24, 2, TRUE),
(3, 1, 4, 'Great movie with amazing action sequences. The emotional moments really hit hard. Could have been a bit shorter though.', 18, 5, FALSE),
(4, 1, 5, 'Perfect conclusion to the saga. Every character got their moment to shine. The theater experience was unforgettable!', 31, 1, TRUE),
(2, 2, 4, 'Amazing Spider-Man movie with great multiverse concept. Tom Holland was fantastic as always.', 15, 3, TRUE),
(3, 3, 4, 'Dark and gritty take on Batman. Robert Pattinson did a great job. The cinematography was outstanding.', 22, 4, FALSE);
