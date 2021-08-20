const express = require('express')
const coinData = require('../cmcCoins.json')

var router = express.Router()

user = 'Muralish'
coins = coinData.data

router.get('/',(req,res)=>{
    res.render('../templates/index',{user:user,coins:coins})
})

module.exports = router