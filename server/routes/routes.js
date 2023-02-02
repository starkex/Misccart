const express = require('express')
const { userModel } = require('../models/users.model')
const { prodModel } = require('../models/prod.model')
const router = express.Router()

router.get('/books', async(req, res) =>{
    try {
        let bdata = await prodModel.find()
        res.send(bdata)
    } catch (error) {
        res.send(error)    
    } 
})

router.post('/login', async(req, res)=> {
    const payload = req.body
    try {
        let loginuser = await userModel(payload)
        await loginuser.save()
        res.send('User Login Successful')
    } catch (error) {
        res.send('Login having Some Issues')        
    }
})

router.post('/register', async(req, res)=> {
    const payload = req.body
    try {
        let newuser = await userModel(payload)
        await newuser.save()
        res.send('User registered successfully')
    } catch (error) {
        res.send('Registration having Some Issues')        
    }
})

module.exports={
    router
}
