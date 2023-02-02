const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const passwordComplexity = require('joi-password-complexity')
const Joi = require('joi')


const ProdSchema = mongoose.Schema({
    offer:String,
    countstrip:Number,
    genres:String,
    productImage:String,
    booktitle:String,
    author:String,
    actualprice:String,
    initialprice:String
})


const prodModel = mongoose.model('allproducts', ProdSchema)

module.exports = {
    prodModel
}