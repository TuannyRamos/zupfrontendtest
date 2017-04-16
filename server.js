var express = require('express');
var app = express();

// configuration for static files
app.use(express.static(__dirname + '/production'));

// start aplication on localhost:8080
app.listen(8080);

console.log("========================================================");
console.log("App started! You can access it on http://localhost:8080/");
console.log("========================================================");
