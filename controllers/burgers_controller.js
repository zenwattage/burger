
/*


4. Create the `router` for the app, and export the `router` at the end of your file.

*/

var express = require('express');

var router = express.Router();

//import model(burger.js) to use it's database functions
var burger = require("../models/burger.js");

router.get("/", function(req,res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;