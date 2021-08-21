const express = require('express')
const mongoose = require('mongoose')
var router = express.Router()

//connect database
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
//Get the default connection
var db = mongoose.connection;

router.get('/',(req,res)=>{
    res.send('ourpicks')
})

module.exports = router