const User = require("../userschema");
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
const CreateCookie = async (Cookie) => {
 
  const f =5
  let newCookie = '';
  console.log(newCookie)
  for(let i=0;i<=Cookie.length;i++){
      switch (Cookie[i]) {
        case "1":
          newCookie += "@";
          break;
        case "2":
          newCookie += "A";
          break;
        case "3":
          newCookie += "E";
          break;
        case "4":
          newCookie += "~";
          break;
        case "5":
          newCookie += "F";
          break;
        case "6":
          newCookie += "%";
          break;
        case "7":
          newCookie += "$";
          break;
        case "8":
          newCookie += "D";
          break;
        case "9":
          newCookie += "^";
          break;
        case "0":
          newCookie += "&";
          break;
        case ".":
          newCookie += ".";
          break;
        case "x":
          newCookie += "*";
          break;
        default:
          newCookie += "";
          break;
      }

    }
    
    console.log('New',newCookie)
    
    return(newCookie)


};
module.exports = CreateCookie;
