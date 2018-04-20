
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
var id1;
var id2;
io.on('connection', function (socket) {
    console.log(i);
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (input) => {
    console.log(`Received: ${input}`);
    //룸에 있는거에 전체 메세지 보내기
    io.to('room').emit("las",input);
});