
//import mongoose
const mongoose = require ('mongoose');

//creating a new Schema in our mongoDB with the table fields that will be seen by the users
const messageSchema = new Schema({
    section: {type: String, enum: ['Heating', 'Plumbing', 'Elteric', 'Painting']},

    name: String, 
    email: String,
    phoneNum: Number,
    body: String,
    message: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean

});

module.exports = mongoose.model( 'Message', messageSchema);