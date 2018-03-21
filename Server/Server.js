var l = require("lambda-js");
var Server_Start_Message=["Las a.k.a Desire","Server Start"];
var express = require('express');
var app = express();
var print = console.log;

var server = app.listen(3000, function(){
    Server_Start_Message.forEach(x=>console.log(x));
})

app.get('/', function(req, res){
    print(res.type);
    res.send("FUCK",);
});