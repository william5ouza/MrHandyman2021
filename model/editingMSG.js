const mongoose = require ('mongoose'); //import mongoose

const Schema = mongoose.Schema;
//creating a new Schema in our mongoDB with the table fields that will be seen by the users
const messageSchema = new Schema({

    name: String, 
    email: String,
    phoneNum: Number,
    body: String,
    message: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean

});

module.exports = mongoose.model( 'editingMSG', messageSchema);