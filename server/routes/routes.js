const express = require('express')
const { userModel } = require('../models/users.model')
const router = express.Router()

router.get('/', async(req, res) =>{
    try {
        let udata = await userModel.find()
        res.send(udata)
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
