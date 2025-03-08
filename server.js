const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv').config();
const app = express();
const static = require('./routes/static'); // Import static routes

// View Engine and Templates
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', './layouts/layout'); // Use a layout located in the 'layouts' folder

// Use static routes from the static.js file
app.use(static);

// Routes
// Example route to render index view
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' }); // Render the 'index' view with the title 'Home'
});

// Local Server Information
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// Log statement to confirm server operation
app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});
