var express = require('express');
var app = express();
var port = 3000;
app.listen(port, function () {
    console.log(`server running on http://localhost:${port}`);
})

app.get('/hello', function (req, res) {
    var sys   = require('util'),
    spawn = require('child_process').spawn,
    dummy  = spawn('python3', ['./aviato.py']);

    dummy.stdout.on('data', function(data) {
        console.log(data.toString());
    });
    dummy.stdout.on('data', function (data) {
        res.send(data.toString());
    });
})