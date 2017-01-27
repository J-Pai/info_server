/**
 * user.js
 * This is the model for user accounts
 */

// Setup connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://info_server:Mech*123@ds133249.mlab.com:33249/jpai_mongodb_main');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("user.js connected to mongodb..."); 
});

// Create schema
var userSchema = new Schema({
    name: String,
    username: {
        type: String, required: true, unique: true
    },
    password: {
        type: String,
        required: true
    },
    meta: {
        verified: boolean,
        reserved: [String],
    }
    created_at: Date,
    updated_at: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;
