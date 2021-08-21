const express = require('express')
const mongoose = require('mongoose')
const Coin = require('../models/coins.js')
var router = express.Router()

//connect database
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
//Get the default connection
var db = mongoose.connection;

router.get('/',async(req,res)=>{
    const coins = await Coin.find({})
    res.json(coins)
})

router.post('/',async(req,res)=>{
    var coin = await Coin.findOne({name: req.body.name})

    if (coin){
        return res.send(req.body.name + ' already exists')
    }
    var coin = new Coin({
        name: req.body.name,
        ticker: req.body.ticker
    })
    try{
        var result = await coin.save()
        res.json(result)
    }catch(err){
        res.status(404).send(err)
    }
})

router.put('/',async(req,res)=>{
    const filter = {name: req.body.name}
    const update = {ticker: req.body.ticker}
    var result = await Coin.findOneAndUpdate(filter,update)
    res.json(result)
})

router.delete('/',async(req,res)=>{
    var _id = req.body.id
    var coin = await Coin.findOne({_id:_id})
    if(!coin) return res.status(404).json({})
    const result = await Coin.deleteOne({_id:_id})
    res.json({_id:_id})
})

module.exports = router