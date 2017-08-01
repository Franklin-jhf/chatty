const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static('assets'));
app.use(bodyParser.json());

let messages = [];

app.get('/api/messages', (req, res, next) => {
	res.status(200).json({messages: messages});
});

app.post('/api/messages', (req, res, next) => {
	messages.push({message: req.body.message, time: new Date(), username: req.body.username });
	// $filter('date');
	res.status(200).json({ messages: messages })
});






app.listen(3000, () => {
	console.log('running on port 3000');
})