
var express = require('express');
var app = express();
const path = require('path');
app.set('view engine', 'ejs');


app.use(express.static('public'))
app.use('/static', express.static('public'));
app.use(express.static(path.join(__dirname + '/public')));


require('./routes/index')(app);


app.listen(6060);
console.log('Server start i localhost:6060');