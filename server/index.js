const express = require('express')
const { router } = require('./routes/routes')
const { connection } = require('./config/db')
const app = express()
const port = 4000
app.use(express.json())

app.use('/main',router)

app.listen(port, async() => {
    try {
        await connection
        console.log(`Server listening on port ${port}!`)
    } catch (error) {
        return error
    }
})