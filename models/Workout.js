// Schema describing one workout document in MongoDB
const mongoose = require('mongoose');

module.exports = mongoose.model('Workout', new mongoose.Schema({
  exercise: { type: String, required: true },  // e.g. "Bench Press"
  category: String,                            // e.g. "Chest"
  sets: Number,
  reps: Number,
  weight: Number,                              // in kg
  date: { type: Date, default: Date.now }
}));