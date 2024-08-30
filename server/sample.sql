-- Create a new database
CREATE DATABASE IF NOT EXISTS server;



-- Create a table for users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a table for posts
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create a table for comments
CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert sample data into the users table
INSERT INTO users (username, email, password) VALUES 
('john_doe', 'john@example.com', 'password123'),
('jane_doe', 'jane@example.com', 'password456'),
('alice_smith', 'alice@example.com', 'password789');

-- Insert sample data into the posts table
INSERT INTO posts (user_id, title, content) VALUES 
(1, 'My First Post', 'This is the content of my first post.'),
(2, 'Another Post', 'Here is another post content.'),
(1, 'Django and MySQL', 'Lets talk about connecting Django to MySQL.');

-- Insert sample data into the comments table
INSERT INTO comments (post_id, user_id, content) VALUES 
(1, 2, 'Great post, thanks for sharing!'),
(2, 1, 'Interesting read.'),
(3, 3, 'I found this very helpful, thank you!');