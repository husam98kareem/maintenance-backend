const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

const connectDB = async() => await mongoose.connect(
    process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('successfully connected')
        }
    })

module.export = connectDB()