const express = require('express');
const app = express();
const router = require('./router/routers')
require("dotenv").config();
const connectToDB = require('./Database/connectToDB')



app.use(express.json());//middleware

app.use('/', router);//middleware

connectToDB();

const PORT = 5000;

app.listen(PORT, () => {

    console.log(`The local server is connected at ${PORT}`);

})

