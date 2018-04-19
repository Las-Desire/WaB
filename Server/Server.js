
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
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
    socket.emit('connection',i);
    socket.on('d',(x)=>{
        console.log(x);
    });
});
rl.on('line', (line) => {
    io.emit('direct-message',line);
});

http.listen(3000, function () {
    console.log('listening on *:3000'); 
});

