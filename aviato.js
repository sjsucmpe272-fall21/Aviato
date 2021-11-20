var express = require('express');
var app = express();
var port = 9000;
var cors = require('cors');
app.use(cors())
app.listen(port, function () {
    console.log(`server running on http://localhost:${port}`);
})

app.get('/season', function (req, res) {
    var sys   = require('util'),
    spawn = require('child_process').spawn,
    arg1= JSON.stringify("season");
    dummy  = spawn('python3', ['./aviato.py', arg1]);

    dummy.stdout.on('data', function (data) {
        res.send(data);
    });
})

app.get('/week', function (req, res) {
    var sys   = require('util'),
    spawn = require('child_process').spawn,
    arg1= JSON.stringify("week");
    dummy  = spawn('python3', ['./aviato.py', arg1]);

    dummy.stdout.on('data', function (data) {
        res.send(data.toString());
    });
})

app.get('/weight', function (req, res) {
    var sys   = require('util'),
    spawn = require('child_process').spawn,
    arg1= JSON.stringify("weight");
    dummy  = spawn('python3', ['./aviato.py', arg1]);

    dummy.stdout.on('data', function (data) {
        res.send(data.toString());
    });
})

app.get('/gameTimeEastern', function (req, res) {
    var sys   = require('util'),
    spawn = require('child_process').spawn,
    arg1= JSON.stringify("gameTimeEastern");
    dummy  = spawn('python3', ['./aviato.py', arg1]);

    dummy.stdout.on('data', function (data) {
        res.send(data.toString());
    });
})