-- Create a new database
CREATE DATABASE IF NOT EXISTS server;

-- Use the database
USE server;

-- Create a table for users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create a table for letter_ids
CREATE TABLE IF NOT EXISTS letter_ids (
    email VARCHAR(64),
    letter_id CHAR(64) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS letters (
    letter TEXT NOT NULL,
    letter_id CHAR(64) PRIMARY KEY,
    l_name CHAR(64) NOT NULL,
    foreign key (letter_id) references letter_ids(letter_id) ON DELETE CASCADE
);

-- Create a table for letter_regex
CREATE TABLE IF NOT EXISTS letter_regex (
    regex VARCHAR(64) NOT NULL,
    letter_id CHAR(64) NOT NULL,
    PRIMARY KEY (letter_id, regex),
    foreign key (letter_id) references letter_ids(letter_id) ON DELETE CASCADE

);

