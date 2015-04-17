var express = require('express')
var router = express.Router();
var request = require('request');
var db = require('../models')

var days = ["sundays","mondays", "tuesdays", "wednesdays", "thursdays", "fridays", "saturdays"]

router.get("/", function(req, res) {
    var d = new Date();
    var dayOfWeek  = days[d.getDay()];

    // db[dayOfWeek].findAll().then(function(locations) {
    //   res.send(locations);
    // // res.render("maps/map", {locations: locations});
    // })

    var queryString = 'select * from trucks,locations,DOW where trucks.id=DOW."truckID" and locations.id=DOW."locationID";'.replace(/DOW/g, dayOfWeek)

    db.sequelize.query(queryString).spread(function(results, metadata) {
          res.render("maps/map", {locations: results});

    });

});


// router.get("/:id", function(req, res) {
//     var dayOfWeek  = req.query.q;


//     var queryString = 'select * from trucks,locations,DOW where trucks.id=DOW."truckID" and locations.id=DOW."locationID";'.replace(/DOW/g, dayOfWeek)

//     db.sequelize.query(queryString).spread(function(results, metadata) {
//           res.render("maps/map", {locations: results});

//     });

// });


module.exports = router;