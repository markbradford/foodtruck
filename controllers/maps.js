var express = require('express')
var router = express.Router();
var request = require('request');
var db = require('../models')


router.get("/", function(req, res) {
    db.location.findAll().then(function(locations) {
    res.render("maps/map", {locations: locations});
    })
});


module.exports = router;