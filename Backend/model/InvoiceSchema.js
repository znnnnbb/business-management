const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { type } = require("express/lib/response");
const InvoiceSchema = new mongoose.Schema({
  Username: {
    type: String,
  },
Transactions:[
  
],

  Cookie:{
    type:String
  },
});




const Invoice = mongoose.model("INVOICE", InvoiceSchema);
module.exports = Invoice;
