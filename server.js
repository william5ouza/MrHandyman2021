const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const ejs = require('ejs');
const connectDB = require('./connections/connector');
const app = express();

dotenv.config({path:'.env'});
const PORT = process.env.PORT || 5000;

//setting up the message controller
var msgCtrl = require('./message_crtl');


//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
//app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");
app.get('/', (req, res) => {
    res.render('index')
})

// *** GET Routes - display pages ***
// Root Rout


//load assets
app.use("/css",express.static(path.resolve(__dirname,"/css")));
app.use("/images",express.static(path.resolve(__dirname,"/images")));
app.use("/views",express.static(path.resolve(__dirname,"/views")));

//load routers
app.use(require('./router'));
app.listen(3000,() => {console.log(`Server is running on http://localhost:${PORT}`)});