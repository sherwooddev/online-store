var express = require('express');
var bodyParser = require("body-parser");
var test = "test":
var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
