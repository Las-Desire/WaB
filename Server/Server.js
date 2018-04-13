
var Server_Start_Message=["Las a.k.a Desire","Server Start"];
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/main.html');
});

var i=0;
var id1;
var id2;
io.on('connection', function (socket) {
    console.log(i);
    io.to(socket.id).emit('connect');
    i++;
    if(i%2==0){
        const delay = require('delay');
        delay(2000)
        .then(() => {
        });
        io.to(socket.id).emit('message','message');
    }
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});

