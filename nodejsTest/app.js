


const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Wilcome88111710348',
    database: 'garden_management_system'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

const result = connection.query('SELECT * FROM user', (err, rows) => {
    if (err) throw err;
    console.log("Rows: ");
    console.log(rows[0]);
});

/*(setTimeout(() => {
    connection.end();
    console.log('Connection closed!');
  }, 2000);*/

console.log(result.rows);

/*const user = {
    Username: 'JohnDoe',
    AcceptedPolicies: true,
    Email: 'johndoe@example.com',
    RegistrationDate: new Date(),
    GPSAccess: true
};

connection.query('INSERT INTO Users SET ?', user, (err, res) => {
    if (err) throw err;
    console.log('User added!');
});

const userId = 1;
const newUsername = 'JaneDoe';

connection.query('UPDATE Users SET Username = ? WHERE UserID = ?', [newUsername, userId], (err, res) => {
    if (err) throw err;
    console.log('User updated!');
});

const userId = 1;

connection.query('DELETE FROM Users WHERE UserID = ?', userId, (err, res) => {
    if (err) throw err;
    console.log('User deleted!');
});*/

//User
//This my code:
// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create routes
app.get('/users', (req, res) => {
  /*connection.query('SELECT * FROM user', (error, results) => {
    if (error) throw error;
    res.send(results);
  });*/

  res.sendFile('index.html', { root: '.' });
});

/*app.post('/users', (req, res) => {
  // Logic for adding a new user to the database
});*/

app.put('/users/:id', (req, res) => {
  // Logic for updating a specific user in the database
});

app.delete('/users/:id', (req, res) => {
  // Logic for deleting a specific user from the database
});

app.get('/foodSources', (req, res) => {
  // Logic for retrieving all food sources from the database
});

// CRUD operations for FoodSources
app.post('/foodSources', (req, res) => {
  // Logic for adding a new food source to the database
});

app.put('/foodSources/:id', (req, res) => {
  // Logic for updating a specific food source in the database
});

app.delete('/foodSources/:id', (req, res) => {
  // Logic for deleting a specific food source from the database
});

// CRUD operations for FoodItems
app.post('/foodItems', (req, res) => {
  // Logic for adding a new food item to the database
});

app.put('/foodItems/:id', (req, res) => {
  // Logic for updating a specific food item in the database
});

app.delete('/foodItems/:id', (req, res) => {
  // Logic for deleting a specific food item from the database
});

// CRUD operations for Suppliers
app.post('/suppliers', (req, res) => {
  // Logic for adding a new supplier to the database
});

app.put('/suppliers/:id', (req, res) => {
  // Logic for updating a specific supplier in the database
});

app.delete('/suppliers/:id', (req, res) => {
  // Logic for deleting a specific supplier from the database
});

// CRUD operations for UserFavorites
app.post('/userFavorites', (req, res) => {
  // Logic for adding a new user favorite to the database
});

app.delete('/userFavorites/:userId/:sourceId', (req, res) => {
  // Logic for removing a specific user favorite from the database
});

// CRUD operations for Sessions
app.post('/sessions', (req, res) => {
  // Logic for creating a new session in the database
});

app.delete('/sessions/:id', (req, res) => {
  // Logic for ending a specific session in the database
});

// Start the server
/*const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});*/

// Create routes
/*app.get('/users', (req, res) => {
  connection.query('SELECT * FROM Users', (error, results) => {
    if (error) {
      console.error("Error executing MySQL query:", error);
      return res.status(500).send("Internal Server Error");
    }
    res.send(results);
  });
});*/

// Handle errors, validate input data, and implement security measures
app.post('/users', (req, res) => {
  const { UserID, Username, AcceptedPolicies, Email, RegistrationDate, GPSAccess } = req.body;
  if (!UserID || !Username || !Email || !RegistrationDate) {
    return res.status(400).send("Required fields are missing.");
  }

  // Implement your own validation and security measures here

  connection.query('INSERT INTO Users (UserID, Username, AcceptedPolicies, Email, RegistrationDate, GPSAccess) VALUES (?, ?, ?, ?, ?, ?)', [UserID, Username, AcceptedPolicies, Email, RegistrationDate, GPSAccess], (error, results) => {
    if (error) {
      console.error("Error executing MySQL query:", error);
      return res.status(500).send("Internal Server Error");
    }
    res.send('User added to the database.');
  });
});

// Similar error handling, input validation, and security measures for other routes

// ...

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
