var db = require('../models');
var express = require('express');
var router = express.Router();

//GET /
//Login
router.get('/logins',function(req,res){
    var user = req.getUser();
    res.render('logins/login',{user:user});
});

//GET /restricted
//an example restricted page
router.get('logins/restricted',function(req,res){
  if(req.getUser()){
    res.render('logins/restricted');
  }else{
    req.flash('danger','You must be logged in to access that page.');
    res.redirect('/');
  }
});


module.exports = router;