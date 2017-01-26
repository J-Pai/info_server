var express = require("express");
var app = express();

var router = express.Router();

// Necessary to allow environment to set PORT
app.set('port', (process.env.PORT || 80));

app.set('view engine', 'ejs');

router.get('/', function(req, res) {
    res.render("pages/index");
});

router.get('/about', function(req,res) {
    res.render('pages/about');
});

app.use("*", function(req,res) {
    res.sendFile("pages/404");
});

app.listen(app.get('port'), function() {
    console.log("Live at Port " + app.get('port'));
});
