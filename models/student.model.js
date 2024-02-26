/**
 * Define the schema of students collection to be
 * stored in the DB
 */

const mongoose = require("mongoose")

//schema
const studentSchema = new mongoose.Schema({
    name : String,
    age : Number
})


//go ahead and create corresponding collection in DB 
module.exports = mongoose.model("Student", studentSchema)   //called from anywhere