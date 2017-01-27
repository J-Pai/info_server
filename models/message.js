/**
 * message.js
 * THis is the model for messages
 */

// Setup connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://info_server:Mech*123@ds133249.mlab.com:33249/jpai_mongodb_main');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("message.js connected to mongodb...");
});


// Create schema
var msgSchema = new Schema({
    sid: {
        type: String, required: true, unique: true
    },
    time_sent: {
        type: Date, required: true
    },
    from: {
        type: String, required: true
    },
    body: {
        type: String, required: true
    }
});

var Message = mongoose.model('Message', msgSchema);

module.exports = Message;
