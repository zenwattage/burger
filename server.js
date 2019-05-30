

const express = require('express');

const app = express();

const path = require('path');
//set handlebars
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;


// Serve static content for the app from the "public" directory in the application directory.
app.use('/static', express.static(path.join(__dirname, 'public')))

// Parse application body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });