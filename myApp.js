require('dotenv').config();
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
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

//Start Implement a Root-Level Request Logger Middleware
/*let myLogger = (req, res, next) => {
    let ClientIp = req.ip
    let path = req.path
    let method = req.method

    console.log(method + " " + path + " - " + ClientIp);
    next()
}
app.use(myLogger);*/
//End Implement a Root-Level Request Logger Middleware

//Chain Middleware to Create a Time Server
/*app.get('/now', function(req, res, next) {
    req.time = new Date().toString();  // Hypothetical synchronous operation
    next();
}, function(req, res) {
    res.send(res.send({time: req.time}));
});*/
//End Chain Middleware to Create a Time Server

//Get Route Parameter Input from the Client
/*app.get("/:word/echo", (req, res) => {
    const { word } = req.params;
    res.json({
        echo: word
    });
});*/
//End Get Route Parameter Input from the Client

//Start Get Query Parameter Input from the Client
/*app.get("/name", (req, res) => {
    let firstName = req.query.first;
    let lastName = req.query.last;
    // OR you can destructure and rename the keys
    //var { first: firstName, last: lastName } = req.query;
    // Use template literals to form a formatted string
    res.json({
        name: `${firstName} ${lastName}`
    });
});*/
//End Get Query Parameter Input from the Client

//Start Use body-parser to Parse POST Requests
app.post("/name", (req, res) => {
    let string = req.body.first + " " + req.body.last;
    res.json({ name: string });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
//End Use body-parser to Parse POST Requests
module.exports = app;
