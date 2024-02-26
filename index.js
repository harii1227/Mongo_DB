const mongoose = require('mongoose')
const studentModel = require("./models/student.model1")
/**
 * write the code  to connect with mongodb
 */
mongoose.connect("mongodb://localhost/be_demodb")

const db = mongoose.connection //start the connection with mongodb

db.once("open", ()=>{
    console.log("connected to MongoDB")
    //logic to insert data into the db
    init()

    //running the quaries on mongodb
    dbQueries()
})



db.on("error", ()=>{
    console.log("error while connecting to db")
});

async function init(){
    //logic to insert data in the db
    const student = {
        name : "raman",
        age : 99,
        email : "ramansinghdon1227@gmail.com",
        subjects : ["Maths", "English"]
    }

    const std_obj = await studentModel.create(student)

    console.log(std_obj)
}

async function dbQueries(){

    //read the student data

    //read the student data based on the id
    // try{
    //     const student = await studentModel.findById("65d8eb7f73b18d63f35b4844")
    //     console.log(student)
    // }catch(err){
    //     console.log(err)
    // }

    // i want to serch based on name
    try{
        // const student = await studentModel.find({name : "raman"})
        const student = await studentModel.findOne({name : "raman"})
        console.log(student)
    }catch(err){
        console.log(err)
    }
    try{
        const student = await studentModel.find({email : "ramansinghdon1227@gmail.com"})
        console.log(student)
    }catch(err){
        console.log(err)
    }
    /**
     * DEals with the multiple conditions
     */
    const stds = await studentModel.where("age").gt("10").where("name").equals("raman").limit(2)
    console.log(stds)

    /**
     * Delete a document where name == raman
     */
    const student = studentModel.deleteOne({name : "raman"})
    console.log(student)
    
}


