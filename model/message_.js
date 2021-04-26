
//import mongoose
const mongoose = require ('mongoose');

//creating a new Schema in our mongoDB with the table fields that will be seen by the users
const MessageSchema = new mongoose.Schema({
    section: {type: String, enum: ['Paiting', 'Plumbing', 'Elteric', 'Heating'], required: true},

    name: {type:String, required: true}, 
    phone: Number,
    location: String,
    message: String
       

});

const aMsg = mongoose.model( 'aMsg', MessageSchema);

module.exports = aMsg;
