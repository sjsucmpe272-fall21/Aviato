var express = require('express');
var app = express();
var port = 9000;
var cors = require('cors');
app.use(cors())
app.listen(port, function () {
    console.log(`server running on http://localhost:${port}`);
})

// API to get list of all team abbrevations
app.get('/list-of-team-abbr', function(req,res){
    var sys   = require('util'),
    spawn = require('child_process').spawn,
    arg1= JSON.stringify("teams");
    dummy  = spawn('python3', ['./aviato.py', arg1]);
    dummy.stdout.on('data', function (data) {
     
        res.json({"teams": data.toString().trim()});
    });
});


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

// TO get head to head games played between two teams when selected from dropdown
app.get('/head-to-head/query', function (req, res) {
    var sys   = require('util'),
    spawn = require('child_process').spawn,

    arg1= JSON.stringify("headToHead");
    const { homeTeam, visitorTeam } = req.query

    team1= JSON.stringify(homeTeam);
    team2= JSON.stringify(visitorTeam);
    dummy  = spawn('python3', ['./aviato.py', arg1,team1,team2]);

    dummy.stdout.on('data', function (data) {
        res.json({"games":Number(data.toString().trim())});
    });
})

app.get('/players-by-height', function (req, res) {
    var sys   = require('util'),
    spawn = require('child_process').spawn,
    arg1= JSON.stringify("height");
    dummy  = spawn('python3', ['./aviato.py', arg1]);

    dummy.stdout.on('data', function (data) {
        res.send(data.toString());
    });
})

