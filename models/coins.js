var mongoose = require('mongoose')

var coinSchema = mongoose.Schema({
    name: {type: String, required: true},
    ticker: String,
    date: {type: Date, default: Date.now}
})

var Coin = mongoose.model('Coin',coinSchema)

module.exports = Coin