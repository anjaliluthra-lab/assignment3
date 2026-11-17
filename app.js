require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(express.static('public'));               // serve CSS

app.get('/', (req, res) => res.send('It works!')); // temporary test route

connectDB()
  .then(() => app.listen(process.env.PORT || 3000, () => console.log('Server running on port 3000')))
  .catch(err => console.error('DB connection failed:', err.message));