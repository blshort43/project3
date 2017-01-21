import express from 'express';

const app = express();

app.use('/', express.static('public'));

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log('Connected on port ' + PORT);
});