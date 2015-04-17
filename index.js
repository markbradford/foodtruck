var express = require('express');
var app = express();
var db = require('./models');
var mapsCtrl = require("./controllers/maps");
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');

app.set("view engine", "ejs");
app.use("/maps", mapsCtrl);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  secret:'dasdasddafdas',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.use(function(req,res,next){
  req.getUser = function(){
    return req.session.user || false;
  }
  next();
})

app.use('/',require('./controllers/main.js'));
app.use('/auth',require('./controllers/auth.js'));

app.get("/", function(req,res){
  db.location.findAll().then(function(locations) {
    res.render("index", {locations: locations});
  })
});












app.listen(process.env.PORT || 3000);