  
const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./connections/connector');

const app = express();

dotenv.config({path:'.env'});
const PORT = process.env.PORT || 5000;

//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");

//load assets
app.use("/css",express.static(path.resolve(__dirname,"/css")));
app.use("/images",express.static(path.resolve(__dirname,"/images")));
app.use("/views",express.static(path.resolve(__dirname,"views")));

//load routers
app.use(require('./router'));

app.listen(3000,() => {console.log(`Server is running on http://localhost:${PORT}`)});