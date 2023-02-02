const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const passwordComplexity = require('joi-password-complexity')
const Joi = require('joi')


const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

UserSchema.methods.generateAuthToken = ()=>{
    const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY,{expiresIn:'7d'})
    return token
}


const userModel = mongoose.model('appusers', UserSchema)

const validate =(data)=>{
    const schema = Joi.object({
        name: Joi.string().required().label('Full Name'),
        email:Joi.string().email().required().label('Enter Email'),
        password: Joi.passwordComplexity().required().label('Password')
    })
    return schema.validate(data)
}

module.exports={
    userModel
}