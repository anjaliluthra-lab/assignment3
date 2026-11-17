// Controller: all the logic for CRUD operations on workouts
const Workout = require('../models/Workout');

// READ: show all workouts (newest first)
exports.list = async (req, res) => {
  const workouts = await Workout.find().sort({ date: -1 });
  res.render('workouts/list', { workouts });
};

// CREATE: show the empty form
exports.addForm = (req, res) => res.render('workouts/add');

// CREATE: save form data to the database
exports.add = async (req, res) => {
  await Workout.create(req.body);
  res.redirect('/workouts');
};

// UPDATE: show form pre-filled with the existing workout
exports.editForm = async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  res.render('workouts/edit', { workout });
};

// UPDATE: save the changes
exports.edit = async (req, res) => {
  await Workout.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/workouts');
};

// DELETE: remove the workout
exports.remove = async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.redirect('/workouts');
};