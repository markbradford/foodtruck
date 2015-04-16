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



// router.get('/categories',function(req,res){
//  if(req.user) {
//  var user = req.user.id;
//    db.category.findAll()
//      .then(function(categories){
//        db.user.find({where: {id: req.user.id }, include: [db.category] })
//          .then(function(userData) {
//          console.log(userData)
//          console.log('user', user)
//          // res.send(userData)
//          res.render('auth/categories', {'categories': categories, 'user': user, 'userData': userData});
//        })
//      });
//  } else {
//    res.redirect('/auth/signup')
//  }
// })

module.exports = router;