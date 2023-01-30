const mongoose = require('mongoose')

mongoose.set('strictQuery',false)
const connection = mongoose.connect('mongodb+srv://billumemo:billumemo@cluster0.txtsxe0.mongodb.net/misccart?retryWrites=true&w=majority')


module.exports = {
    connection,
}