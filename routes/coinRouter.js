const express = require('express')
const mongoose = require('mongoose')
const Coin = require('../models/coins.js')
var router = express.Router()

//connect database
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
//Get the default connection
var db = mongoose.connection;

router.get('/',(req,res)=>{
    const coins = getCoins()
    res.send(coins)
})

router.post('/',(req,res)=>{
    const coins = Coin.find({name: req.body.name})
    if (coins){
        return res.send(req.body.name + ' already exists')
    }
    var coin = new Coin({
        name: req.body.name,
        ticker: req.body.ticker
    })
    try{
        var result = coin.save()
        res.send(req.body.name + ' created')
    }catch(err){
        res.send(err)
    }
})

async function getCoins(){
    const coins = await Coin.find({})
    console.log("Finding coins..." + coins)
    return coins
}

module.exports = router