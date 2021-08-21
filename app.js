const express = require('express')
const dotenv = require('dotenv').config()
const indexRouter = require('./routes/indexRouter.js')
const coinRouter = require('./routes/coinRouter.js')
const ejs = require('ejs')

//init express
app = express()
//json
app.use(express.json())
//render static file
app.use(express.static('public'))
//set view engine to ejs
app.set('view engine','ejs')
//routes
app.use('/ourpicks',coinRouter)
app.use('/',indexRouter)

const PORT = 3000
app.listen(PORT || process.env.PORT,()=>{
    console.log("Server Initiated at port: " + process.env.PORT)
})