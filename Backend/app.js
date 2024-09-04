const dotenv = require('dotenv')
const express = require('express')
const res = require("express/lib/response")
const app = express()
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const Path = require('path')
const Open = require('open')
dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const User = require('./model/userschema')
app.set("view engine","pug")
app.use(express.static(Path.join(__dirname,'build')))
const file = Path.join(__dirname,'build','index.js')
app.get('/',async(req,res)=>{
    // res.sendFile(Path.join(__dirname,'dist','index.js'))
    res.sendFile(file)
})
app.get('*',async(req,res)=>{
    // res.sendFile(Path.resolve(__dirname,'dist','index.js'))
    
      res.redirect('/')
})
const aaa=()=>{
    // res.sendFile(Path.resolve(__dirname,'dist','index.js'))
    res.send('asda')
}


//const PORT = process.env.PORT || 5000;
const PORT =  3000;
//adding router 
app.use(require('./router/auth'))

const middleware =(req,res,next)=>{
    console.log("middleware")
    next();
}





app.listen(PORT,async()=>{

    console.log(`running at  ${PORT}`)
    // await Open('http://localhost:3000/',{app:{name:'Chrome'}})
})







