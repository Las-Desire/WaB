'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    res.send('LAS');


});

router.get('/keyboard', function (req, res) {

    var message = {
        type: 'buttons',
        buttons: [
            'LAS TEST1',
            'LAS TEST2'
        ]
    };
    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(message));
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
