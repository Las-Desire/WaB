var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require("fs");

var LAS = require('./routes/LAS');

var Server_Start_Message=["Las a.k.a Desire","Server Start"];

var send_html = (res, path)=>{
    fs.readFile(path,  function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
};


io.sockets.on('connection', function (socket) {
    console.log('ll');
});

app.get('/las',(res,req)=>{
    console.log('las');
    send_html(req,"./HTML/Main.html");
});

http.listen(3000, function () {
    Server_Start_Message.forEach(x=>console.log(x));
});
