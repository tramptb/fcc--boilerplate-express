require('dotenv').config();
let express = require('express');
let app = express();
//console.log("Hello World");
/*app.get("/", function(req, res) {
 res.send('Hello Express');
});*/
//const absolutePath = __dirname + '/views/index.html';
let message = "Hello json";
if(process.env.MESSAGE_STYLE === 'uppercase'){
    message = message.toUpperCase();
}
app.get("/json", function (req, res) {
    res.json({"message": message});
});
/*app.use('/public', express.static(__dirname + "/public"));*/

module.exports = app;
