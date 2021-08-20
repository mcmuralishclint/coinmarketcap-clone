const express = require('express')
const dotenv = require('dotenv').config()
const coinData = require('../cmcCoins.json') //Mock coin index API call
const bitcoin = require('../bitcoin.json') //Mock coin detail API call
const rp = require('request-promise');

var router = express.Router()

user = 'Muralish'
const coins = coinData.data

router.get('/',(req,res)=>{
    const page = req.query.page
    const limit = 5
    const startIndex = (page-1)*limit
    const endIndex = page*limit
    const paginated_coins = coins.slice(startIndex,endIndex)
    res.render('../templates/index',{user:user,coins:paginated_coins})
})

router.get('/:slug',(req,res)=>{ 
    //filter 
    var coin = coins.filter(function(item) {
        return item.slug == req.params.slug;
    });
    id = coin[0].id
    //get info from the API
    response = bitcoin
    //return
    if(coin.length>0){
        // coinfInfo = getCoinData(id).data[id]
        // ---------Mocking API calls---------- 
        // requestOptions = getCoinData(id)
        // rp(requestOptions).then(response => {
        //     res.render('../templates/single_coin',{coin:coin[0],coinInfo:response.data[id]})
        // }).catch((err) => {
        //     res.render('../templates/single_coin',{coin:coin[0]})
        // });
        id = 1 //Remove this
        res.render('../templates/single_coin',{coin:coin[0],coinInfo:response.data[id]})
    }else{
        res.send("The coin you're searching for is not in our database")
    }    
})

function getCoinData(id){
    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info',
        qs: {
          'id': id
        },
        headers: {
          'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY
        },
        json: true,
        gzip: true
      };
    return requestOptions
}

module.exports = router