"use strict";
module.exports = function(sequelize, DataTypes) {
  var thursday = sequelize.define("thursday", {
    truckID: DataTypes.INTEGER,
    locationID: DataTypes.INTEGER,
    time: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return thursday;
};