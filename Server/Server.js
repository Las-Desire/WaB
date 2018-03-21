var express = require('express');
var path = require('path');
var LAS = require('./routes/LAS');
var l = require("lambda-js");


var Server_Start_Message=["Las a.k.a Desire","Server Start"];
var app = express();
var print = console.log;


var server = app.listen(3000, ()=>{
    Server_Start_Message.forEach(x=>console.log(x));
})

app.use('/', LAS);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});