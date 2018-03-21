var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var LAS = require('./routes/LAS');
var l = require("lambda-js");


var Server_Start_Message=["Las a.k.a Desire","Server Start"];
var app = express();
var print = console.log;


var server = app.listen(3000, ()=>{
    Server_Start_Message.forEach(x=>console.log(x));
})

app.get('/', (req, res)=>{
    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    print(req.url);
    res.send("<h1>FUCK</h1>");
});