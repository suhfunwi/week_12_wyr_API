const express = require('express')
const indexRouter = require('./routes/index')
//path to the index file
const app = express()
//using express for the app the same way as the other project this week
app.use('/', indexRouter)
const server = app.listen(process.env.PORT || 3000, function (){
    console.log('Server is running on port', server.address().port)
})