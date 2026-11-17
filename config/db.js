// Connects to MongoDB using the URI stored in .env (keeps credentials out of code)
require('dotenv').config();
const mongoose = require('mongoose');

module.exports = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB connected');
};