"use strict";
var geocoder = require('geocoder');
module.exports = function(sequelize, DataTypes) {
  var location = sequelize.define("location", {
    address: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    hooks: {
      beforeCreate: function(location, options, fn) {
        geocoder.geocode(location.address, function(err,data) {
          if (err) { fn(err,null) }
          location.lat = data.results[0].geometry.location.lat;
          location.lng = data.results[0].geometry.location.lng;
          fn(null,location);
        })
      }
    }
  });
  return location;
};