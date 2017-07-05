// REQUIRE NPM -- express, method-override, body-parser
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var port = process.env.PORT || 9000;

// //bodyParser Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");


// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_Controller.js");

app.use("/", routes);


console.log("listening on port " + port);
app.listen(port);
