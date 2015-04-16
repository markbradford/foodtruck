"use strict";
module.exports = function(sequelize, DataTypes) {
  var friday = sequelize.define("friday", {
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
  return friday;
};