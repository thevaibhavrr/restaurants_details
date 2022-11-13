const { application } = require('express')
const express = require('express')
const app = express()
require('./conifg/db')
app.use(express.json())

const userRoute = require('./router/routes')

app.use('/',userRoute)

  


app.listen(8000,()=>{console.log('listin on 8000')})