// Required dependencies
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');  // Added space around '=' for consistency
const path = require('path');
const cors = require('cors');

// Configuration
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));

app.listen(7005, () => {
    console.log('Server is running on port 7004')
})