/**
 * Define the schema of students collection to be
 * stored in the DB
 */

const mongoose = require("mongoose");

//schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    age: 19,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    minlength: 15,
  },
  subject: [String],
  createdAt: {
    type: Date,
    immutable: true,
    default: () => {
      return Date.now();
    },
  },
},{versionKey : false , timestamps : true})

//go ahead and create corresponding collection in DB
module.exports = mongoose.model("Student", studentSchema); //called from anywhere
