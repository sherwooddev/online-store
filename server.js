var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
app.use(express.static(__dirname + "/dist"));

app.listen(process.env.PORT || 8080);
