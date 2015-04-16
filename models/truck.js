"use strict";
module.exports = function(sequelize, DataTypes) {
  var truck = sequelize.define("truck", {
    truckName: DataTypes.STRING,
    cuisine: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return truck;
};