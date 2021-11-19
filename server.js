const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
require('dotenv').config();

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/views/index.html');
});
app.post('/api/fileanalyse', multer().single('upfile'), function (req, res) {
	const file = req.file;
	console.log(file);
	res.json({ name: file.originalname, size: file.size, type: file.mimetype });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('Your app is listening on port ' + port);
});
