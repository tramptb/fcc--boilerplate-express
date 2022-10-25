require('dotenv').config();
let express = require('express');
let app = express();
//console.log("Hello World");
/*app.get("/", function(req, res) {
 res.send('Hello Express');
});*/
//const absolutePath = __dirname + '/views/index.html';


/*app.get("/json", function (req, res) {
    if (process.env['MESSAGE_STYLE'] === "uppercase") {
        res.json({"message":"Hello json".toUpperCase()})
    }else {
        res.json({"message": "Hello json"});
    }
});*/
/*app.use('/public', express.static(__dirname + "/public"));*/

app.use( (req, res, next)=>{
    console.log(req.method + " "+ req.path + "-" + req.ip);
    next();
})

module.exports = app;
