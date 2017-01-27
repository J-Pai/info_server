/**
 * twilio_sms.js
 * Contains code dealing with twilio's API
 */

var accountSid = 'AC08f5eb5faf00625bdbc62559730c4308';
var authToken = '0ab00ab4848fd04cf32547dbd555c752';
var requestKey = 'eepFt0qy5i2DKb40Fs69v5XIQA2eFkFE';

var twilio = require('twilio')(accountSid, authToken);
var Message = require('../models/message');

module.exports = {
    receive : function(req,res) {
        console.log('receive_sms POST request');
        if (req.query['key'] && req.query['key'] === requestKey) {
            twilio.messages.list({
            }, 
            function(err, data){
                Message.findOne({ sid: data.messages[0].sid }, 
                function(err, msg) {
                    if (err) throw err;
                    if (!msg) {
                        var newMsg = Message({
                            sid: data.messages[0].sid,
                            time_sent: data.messages[0].date_sent,
                            from: data.messages[0].from,
                            body: data.messages[0].body
                        });
                        console.log(newMsg);
                        newMsg.save(function(err) {
                            if (err) throw err;
                            console.log('New Msg Logged!');
                        })
                    } else {
                        console.log('Message already exists in db...')
                    }
                })
            });
        } else {
            console.log('Bad receive_sms request');
            res.status(403).send('Unauthorized Access');
        }
        res.end();
    }
}
