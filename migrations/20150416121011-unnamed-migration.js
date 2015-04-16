"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
  'trucks',
  'cuisine',
  DataTypes.STRING
)
    // add altering commands here, calling 'done' when finished
    done();
  },

  down: function(migration, DataTypes, done) {
    migration.removeColumn(
  'trucks',
  'cuisine',
  DataTypes.STRING
)
    // add reverting commands here, calling 'done' when finished
    done();
  }
};
