var express = require('express');
var app = express();
var db = require('./models');
var mapsCtrl = require("./controllers/maps");

app.set("view engine", "ejs");
app.use("/maps", mapsCtrl);

app.use(express.static(__dirname + "/public"));


app.get("/", function(req,res){
  db.location.findAll().then(function(locations) {
    res.render("index", {locations: locations});
  })
});

app.listen(process.env.PORT || 3000);