const mongoose = require("mongoose");
require('dotenv').config();
// console.log(process.env.MONGODB_URI);
async function connectToDB() {

    try {

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Mongodb is connected successfully!");
    } catch (error) {

        console.error("There is an error!", error)
    }

}

module.exports = connectToDB;

