const User = require('../userschema');
const express = require('express')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())
const authenticate = async  (req,res,next)=>{

  try{
    console.log(User)
    console.log(req.cookies)
    console.log('in authen')
    const token = req.cookies.jwtoken;
    console.log(token)
    const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
    console.log(verifyToken)
    const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})
    console.log(rootUser)
    if(!rootUser)
    {
      console.log('not found')
      throw new Error("user not found")

    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();




  }catch(e){
    res.status(400).send('not logged in ')
    console.log(e)
    next()
  }
    
    
}






module.exports = authenticate