
var Server_Start_Message=["Las a.k.a Desire","Server Start"];
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/main.html');
});

var i=0;
io.on('connection', function (socket) {
    console.log(i);
    i=i+1;
    socket.emit('a',50);
});
http.listen(3001, function () {
    console.log('listening on *:3000');
});

