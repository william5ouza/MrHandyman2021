const express = require ('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect('mongo')
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json)

const messagesRouter = require()

const mongoose =require('mongoose');

const connectDB = async() => {
    try {
        //mongodb connection string
        const con = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        });

        console.log(`MongoDB connected:${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;


app.listen(3000, () => console.log('Server has  started'))