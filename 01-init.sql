-- Connect to the new database
\c productitemsdb;

-- Create a table to store your data
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);
