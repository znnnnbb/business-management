const User = require("../userschema");
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { Cookieify } = require("nodemon/lib/utils");
const app = express();
app.use(cookieParser());
const AuthCookie = async (Cookie) => {
  let newCookie = "";

  console.log("inauthcookie ", Cookie);
  if (Cookie === 'undefined'||Cookie ===''||Cookie==='null') {
    return('')
  } else {
    for (i = 0; i <= Cookie.length; i++) {
      switch (Cookie[i]) {
        case "@":
          newCookie += "1";
          break;
        case "A":
          newCookie += "2";
          break;
        case "E":
          newCookie += "3";
          break;
        case "~":
          newCookie += "4";
          break;
        case "F":
          newCookie += "5";
          break;
        case "%":
          newCookie += "6";
          break;
        case "$":
          newCookie += "7";
          break;
        case "D":
          newCookie += "8";
          break;
        case "^":
          newCookie += "9";
          break;
        case "&":
          newCookie += "0";
          break;
        case "*":
          newCookie += "x";
          break;
        case ".":
          newCookie += ".";
          break;
        default:
          newCookie += "";
          break;
      }
    }
    console.log("newCookie", newCookie);
    return newCookie;
  }
};
module.exports = AuthCookie;
