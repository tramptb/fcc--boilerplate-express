require('dotenv').config();
let express = require('express');
let app = express();
//console.log("Hello World");
/*app.get("/", function(req, res) {
 res.send('Hello Express');
});*/
//const absolutePath = __dirname + '/views/index.html';
let response  = "Hello json";
if(process.env.MESSAGE_STYLE === 'uppercase'){
    response = response.toUpperCase();
}

app.get("/json", function (req, res) {

    res.json({"message": response});
});
/*app.use('/public', express.static(__dirname + "/public"));*/

module.exports = app;
