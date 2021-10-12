// dependencies
const express = require("express");
const fs = require("fs");
const db = require("./Develop/db/db.json");
const uuid = require('./helpers/uuid');
const path = require('path');

// set up express app
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// setting up routes
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);