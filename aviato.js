var express = require('express');
var app = express();
var port = 9000;
var cors = require('cors');

const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('./models/user')
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost:27017/nfl-bowl', {})

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

JWT_SECRET = 'dasdq34tgdfgd4s53'


app.listen(port, function () {
    console.log(`server running on http://localhost:${port}`);
})

app.post('/api/login', async (req, res) => {
	const { username, password } = req.body
	const user = await User.findOne({ username }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token })
	}

	res.status(401).json({ status: 'error', error: 'Invalid username/password' })
})

app.post('/api/register', async (req, res) => {
    console.log(req.body);
	const { username, password: plainTextPassword } = req.body

	
	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await User.create({
			username,
			password
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.status(400).json({ status: 'error', error: 'Username already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
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

app.get('/players-by-positions', function (req, res) {
    var sys   = require('util'),
    spawn = require('child_process').spawn,
    arg1= JSON.stringify("position");
    dummy  = spawn('python3', ['./aviato.py', arg1]);

    dummy.stdout.on('data', function (data) {
        res.send(data.toString());
    });
})

app.get('/plays-by-quarter', function (req, res) {
    var sys   = require('util'),
    spawn = require('child_process').spawn,
    arg1= JSON.stringify("playsbyquarter");
    dummy  = spawn('python3', ['./aviato.py', arg1]);

    dummy.stdout.on('data', function (data) {
        res.send(data.toString());
    });
})

