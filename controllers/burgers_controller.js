var express = require("express");

var router = express.Router();

// import burgers.js
var burgers = require("../models/burger.js")

// Create all our routes and set up logic within those routes where required. will be exported thorugh router
router.get("/", function(req, res) {
    burgers.selectAll(function(data){
        var hbsObject = {
            cats: data
          };
          console.log(hbsObject);
          res.render("index", hbsObject);
    })
}); //get end

router.post("/api/burgers", function(req, res) { 
    burgers.insertOne(req.body.name, function(result) {
          // Send back the ID of the new quote
          res.json({ id: result.insertId });
        });
}); //post end

router.put("/api/burgers/:id", function(req, res) {
    var condition = req.params.id;
    console.log("condition", condition);

    burgers.updateOne(condition, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
}); // put end

module.exports = router;