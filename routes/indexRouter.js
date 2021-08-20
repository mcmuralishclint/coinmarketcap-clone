const express = require('express')
const coinData = require('../cmcCoins.json')

var router = express.Router()

user = 'Muralish'
coins = coinData.data

router.get('/',(req,res)=>{
    res.render('../templates/index',{user:user,coins:coins})
})

router.get('/:id',(req,res)=>{  
    var coin = coins.filter(function(item) {
        return item.id == req.params.id;
      });
      if(coin.length>0  ){
        res.render('../templates/single_coin',{coin:coin[0]})
      }else{
          res.send("The coin you're searching for is not in our database")
      }    
})

module.exports = router