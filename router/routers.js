const express = require('express');
const router = express.Router();
const User =  require('../models/User')

router.post('/signup',async(req,res)=>{

    const {name,email,password,gender} = req.body;
   
    const newUser = new User({name,email,password,gender});
    await newUser.save();

    res.status(200).json({
    
        msg: "User created successfully!",
        data: {name,email,password,gender }
    })
    })
   
    module.exports = router;