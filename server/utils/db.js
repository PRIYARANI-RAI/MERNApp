const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/mern_admin";

const connectDB = async () => {
    try{
        await mongoose.connect(URI);
        console.log("Connected to DB")
    } catch(e){
        console.error("Database connection failed");
        process.exit(0);
    }
}

module.exports = connectDB;