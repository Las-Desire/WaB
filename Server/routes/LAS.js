'use strict';
var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/image', (req, res) => {
    send_jpg(res,"./test.jpg");
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
    send_html(res,"./HTML/Main.html");
    console.log(req.body);
    console.log('set 6644');
});

router.post('/6644', (req, res) => {
    console.log(req);
    console.log('post 6644');
});

router.get('/myaction',(req,res)=>{
    console.log('get action');
});
router.post('/myaction',(req,res)=>{
    console.log(req.body);
    console.log('post action');
});

module.exports = router;   