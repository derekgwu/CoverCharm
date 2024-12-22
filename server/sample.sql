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

CREATE TABLE IF NOT EXISTS letter_ids (
    email VARCHAR(64),
    letter_id INT PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS letter_regex (
    regex VARCHAR(64) NOT NULL UNIQUE,
    letter_id INT PRIMARY KEY,
);