
const tp = require('http')
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const ejs = require('ejs');
const connectDB = require('./connections/connector');
const app = express();

var msgCtrl = require('./control/message_ctrl')

bodyParser = require("body-parser")



const fs = require('fs');
    var myCss = {
         style : fs.readFileSync('./views/css/style.css','utf8')
     };


dotenv.config({path:'.env'});
const PORT = process.env.PORT || 8000;

//setting up the message controller


//mongodb connection
connectDB();

app.use(bodyParser.urlencoded({extended: true}));


app.set('views', path.join(__dirname, 'views'));
app.set("view engine","ejs");
// set path for static assets
app.use(express.static(path.join(__dirname, 'views')));

//load routers

app.use('/', require('./router/routes'));


app.listen(8000,() => {console.log(`Server is running on http://localhost:${PORT}`)});
console.log(process.env.DB_URL);