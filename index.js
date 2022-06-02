const express = require('express');
const res = require('express/lib/response');
const app = express()

const userData = require('./user.json')

const port = process.env.PORT || 3000

app.get('/',(req,res) => {
    res.send("My Store index page!")
})


app.get('/users',(req,res)=>{
    res.send(userData)
})


app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})