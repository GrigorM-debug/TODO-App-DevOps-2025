const mongoose = require("mongoose");

//Some change to trigger the github action
const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    trim: true,
  },
  createDate: Date,
  completedDate: Date,
  completed: Boolean,
});

module.exports = mongoose.model("Task", taskSchema);
