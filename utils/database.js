// utils/database.js
const mongoose = require("mongoose")

// mongodb+srv://itaichies:<password>@cluster0.nbrzvgj.mongodb.net/?retryWrites=true&w=majority


const connectDB = async() => {

    try{       
        await mongoose.connect("mongodb+srv://itaichies:ibasin3152016@cluster0.nbrzvgj.mongodb.net/appDataBase?retryWrites=true&w=majority")
        console.log("Success: Connected to MongoDB")

    }catch(err){
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()

    }


}

module.exports = connectDB
