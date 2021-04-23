
//import mongoose
const mongoose = require ('mongoose');

//creating a new Schema in our mongoDB with the table fields that will be seen by the users
const MessageSchema = new mongoose.Schema({
    section: {type: String, enum: ['Heating', 'Plumbing', 'Elteric', 'Painting'], required: true},

    name: {type:String, required: true}, 
    phone: Number,
    location: String,
    message: String,
    date: { type: Date, default: Date.now }
    

});

module.exports = mongoose.model( 'Messages', MessageSchema);