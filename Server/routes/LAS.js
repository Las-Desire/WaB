'use strict';
var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/', (req, res) => {
    res.send('LAS');
});

var send_jpg = (res, path)=>{
    
    fs.readFile(path,  function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data);
    });
};

var send_html = (res, path)=>{
    
    fs.readFile(path,  function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
};

router.get('/6644', (req, res) => {
    //res.send('<h1>LAS</h1>');
    //server.js path
    send_html(res,"./HTML/Main.html");
});

router.post('/message', function (req, res) {

    var message = {
        type: 'text',
        text: "LAS 01"
    };
    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(message));
});




module.exports = router;
