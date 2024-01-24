-- -- Create a new database
-- CREATE DATABASE testdb;

-- -- Connect to the new database
-- \c testdb;

-- -- Create a table to store your data
-- CREATE TABLE items (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description TEXT
-- );



-- Create a new database
-- CREATE DATABASE itemdb;

-- -- Connect to the new database
-- \c itemdb;

-- -- Create a table to store your data
-- CREATE TABLE items (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description TEXT
-- );


CREATE DATABASE productitemsdb;

-- Connect to the new database
\c productitemsdb;

-- Create a table to store your data
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);
