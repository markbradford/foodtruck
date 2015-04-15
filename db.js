var db = require('./models');
var geocoder = require('geocoder');

db.truck.create({truckName: "I Love My GFF"})
.then(function(truckName) {
  console.log(truckName.get())
});

db.location.create({address: "1016 Republican St, Seattle, WA"})
.then(function(location) {
  console.log(location.get())
});