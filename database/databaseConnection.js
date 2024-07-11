const mongoose = require("mongoose")


async function connectToDb(){
   await mongoose.connect("mongodb+srv://jennysasttha:TG1TgR1VgvVEuhku@cluster0.ixz1ein.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   console.log("Database connected")
}

module.exports = connectToDb