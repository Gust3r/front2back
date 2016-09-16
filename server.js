var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js')
var userCtrl = require('./controllers/userCtrl.js')

var app = express();

app.use(bodyParser.json())
app.use(cors(corsOptions))

app.use(express.static(__dirname + '/public'))

app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))

app.get('/api/aboutus', userCtrl.getData)
app.post('/api/addfact', userCtrl.addData)





var corsOptions = {
  origin: 'http://localhost:4000'
}









app.listen(4000, function(){
  console.log('Listening on port ' + 4000);
})
