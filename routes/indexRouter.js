var express = require('express')
const path = require('path');
var router = express.Router()
const ejs = require('ejs')

router.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('../templates/index')
})

router.get('/about',(req,res)=>{
    res.send('About')
})

module.exports = router