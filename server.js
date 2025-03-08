const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");  // Import static.js

// View Engine and Templates
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

// Routes
app.use(static);  // Use the static route for serving static files

// Local Server Information
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// Log statement to confirm server operation
app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});
