"use strict";
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8,200],
          msg: 'Password must be at least 8 characters long'
        }
      }
    },
    name: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(user,options,sendback){
        bcrypt.hash(user.password,10,function(err,hash){
          if(err){ throw err; }
          user.password=hash;
          sendback(null,user);
        });
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};