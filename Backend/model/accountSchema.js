const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { type } = require("express/lib/response");
const { stringify } = require("nodemon/lib/utils");
const AccountSchema = new mongoose.Schema({
  Username: { type: String },
  Cookie: { type: String },
  name: { type: String },
  Cash: {type:Number},
  CashInHand: {type:Number},
  CashInBank:{type:Number},
TotalDebitor: {type:Number },

TotalCreditor: { type: Number },
    
  
 
InvoiceNo:{type:Number},
  Transactions: [{}],
  Cookie: { type: String },
  party: [
    {
   
    },
  ],
  Client: [
    {
     
    },
  ],
  Inventory:[{
    Name:{type:String},
    Description:{type:String},
    Price:[
      {
          
      }],
    Quantity:{type:Number},
    Sold:{type:Number},
     Tax:{type:String},
    CODETYPE:{type:String},
    CODE:{type:String},
    MINOQ:{type:String},
    Unit:{type:String},
    Image:{type:String}

  }],
  others: {},
});

const Account = mongoose.model("ACCOUNTS", AccountSchema);
module.exports = Account;
