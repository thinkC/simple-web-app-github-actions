// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');

// const app = express();
// const port = 3000;

// // Use body-parser middleware to parse JSON
// app.use(bodyParser.json());

// // Serve static files from the "public" directory
// app.use(express.static('public'));

// // Configure the PostgreSQL connection pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'testdb',
//   password: 'P@ssw0rd',
//   port: 5432,
// });

// // Check the database connection
// pool.connect((err, client, done) => {
//   if (err) {
//     console.error('Unable to connect to the database:', err);
//   } else {
//     console.log('Connected to the database');
//     done();
//   }
// });


// // CRUD operations

// // Create
// app.post('/items', async (req, res) => {
//   const { name, description } = req.body;
//   const result = await pool.query('INSERT INTO items(name, description) VALUES($1, $2) RETURNING *', [name, description]);
//   res.json(result.rows[0]);
// });

// // Read all
// app.get('/items', async (req, res) => {
//   const result = await pool.query('SELECT * FROM items');
//   res.json(result.rows);
// });

// // Read one
// app.get('/items/:id', async (req, res) => {
//   const { id } = req.params;
//   const result = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
//   res.json(result.rows[0]);
// });

// // Update
// app.put('/items/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, description } = req.body;
//   const result = await pool.query('UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *', [name, description, id]);
//   res.json(result.rows[0]);
// });

// // Delete
// app.delete('/items/:id', async (req, res) => {
//   const { id } = req.params;
//   const result = await pool.query('DELETE FROM items WHERE id = $1 RETURNING *', [id]);
//   res.json(result.rows[0]);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


//////////////////////////

const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Use body-parser middleware to parse JSON
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Configure the PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  // host: 'postgres-container',
  host: 'crud-web-app-docker-postgres-1',
  // host: 'postgres',
//   database: 'itemdb',
  database: 'productitemsdb',
  password: 'P@ssw0rd',
  port: 5432,
});

// Check the database connection
pool.connect((err, client, done) => {
  if (err) {
    console.error('Unable to connect to the database:', err);
  } else {
    console.log('Connected to the database');
    done();
  }
});


// CRUD operations

// Create
app.post('/items', async (req, res) => {
  const { name, description } = req.body;
  const result = await pool.query('INSERT INTO items(name, description) VALUES($1, $2) RETURNING *', [name, description]);
  res.json(result.rows[0]);
});

// Read all
app.get('/items', async (req, res) => {
  const result = await pool.query('SELECT * FROM items');
  res.json(result.rows);
});

// Read one
app.get('/items/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
  res.json(result.rows[0]);
});

// Update
app.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const result = await pool.query('UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *', [name, description, id]);
  res.json(result.rows[0]);
});

// Delete
app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('DELETE FROM items WHERE id = $1 RETURNING *', [id]);
  res.json(result.rows[0]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

