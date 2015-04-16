"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("wednesdays", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      truckID: {
        type: DataTypes.INTEGER
      },
      locationID: {
        type: DataTypes.INTEGER
      },
      time: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("wednesdays").done(done);
  }
};