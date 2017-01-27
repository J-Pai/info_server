/**
 * account.js
 * Contains code dealing with account management and creation
 */

module.exports = {
    create_user : function(req,res) {
        console.log(req.query);
        res.end();
    }
}
