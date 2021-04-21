//William Souza 2020449
//This is the module that connects the server to MongoDB Atlas

const dotenv = require('dotenv')
const mongoose =require('mongoose')
dotenv.config({path:'.env'});



const dbURI = process.env.DB_URL;
const conntoDB = async() => {
    try {
        //mongodb connection String from the .env file
        const conn = await mongoose.connect(dbURI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        });
        //Message shown whenever the connection works
        console.log(`MongoDB is connected`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conntoDB;