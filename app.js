const express = require('express')
const indexRouter = require('./routes/indexRouter.js')
const ejs = require('ejs')

//init express
app = express()
//render static file
app.use(express.static('public'))
//set view engine to ejs
app.set('view engine','ejs')
//routes
app.use('/',indexRouter)

const PORT = 3000
app.listen(PORT || process.env.PORT,()=>{
    console.log("Server Initiated")
})