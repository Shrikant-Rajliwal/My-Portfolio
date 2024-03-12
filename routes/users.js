var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")
const Schema = mongoose.Schema;



mongoose.connect('mongodb://127.0.0.1:27017/practiceAPPP')

const schema = new Schema({

  name:{
    type : String,
  },
  email:{
    type: String,
  },
  password:{
    type:String
  }

})
var data = mongoose.model("data",schema)
module.exports = data;
