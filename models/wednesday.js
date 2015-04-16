"use strict";
module.exports = function(sequelize, DataTypes) {
  var wednesday = sequelize.define("wednesday", {
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
  return wednesday;
};