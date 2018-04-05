var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var LAS = require('./routes/LAS');
var l = require("lambda-js");

var Server_Start_Message=["Las a.k.a Desire","Server Start"];

http.listen(3000, function () {
    Server_Start_Message.forEach(x=>console.log(x));
});

app.use('/', LAS);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

