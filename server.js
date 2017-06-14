var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
})

const port = process.env.PORT || 3000
app.listen(port, process.env.IP, function() {
	console.log('Listening on port 3000!');
})