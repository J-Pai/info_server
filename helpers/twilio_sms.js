/**
 * twilio_sms.js
 * Contains code dealing with twilio's API
 */

var accountSid = 'AC08f5eb5faf00625bdbc62559730c4308';
var authToken = '0ab00ab4848fd04cf32547dbd555c752'; 

var twilio = require('twilio')(accountSid, authToken);

module.exports = {
    receive : function(req,res) {
        console.log('receive_sms POST request');
        twilio.messages.list({
        }, function(err, data){
            console.log(req);
            //console.log(data.messages[0].from + ":" + data.messages[0].body);
            //console.log("Full Message Body:\n" + data.messages[0]);
        });
        res.end();
    }
}
