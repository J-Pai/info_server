/**
 * server.js
 * Main code for web application backend
 */

var express = require("express");
var http = require("http");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var sms = require('./helpers/twilio_sms.js');
var acc = require('./helpers/account.js');

var Message = require('./models/message');

var Vue = require('vue');
// Necessary to allow environment to set PORT
app.set('port', (process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000));
app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/vue/dist/'));
app.use('/scripts', express.static(__dirname + '/node_molules/'))

// Render views
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("pages/index");
});

app.get('/messages', function(req, res) {
    Message.find({}, '-_id time_sent body', function (err, msgs) {
        res.render('pages/messages', { messages: msgs });
    });
});

app.get('/socket-messages', function(req,res) {
    Message.find({}, '-_id time_sent body', function (err, msgs) {
        res.render('pages/socket-messages', {messages: msgs });
    });
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

// API
app.post('/receive_sms', sms.receive);
app.post('/create_user', acc.create_user);

// Page not found error
app.get('/404', function(req, res, next){
    // Trigger a 404
    next();
});

app.use(function(req, res, next) {
    res.status(404);
    res.render('pages/404', {url: req.url});
    return;
});

// Sockets and Web Server Initialization

io.on('connection', function(socket) {
    console.log('A user has connected...');
});

http.listen(app.get('port'), function() {
    console.log("Live at Port " + app.get('port'));
});
