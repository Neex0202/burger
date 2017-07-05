//IMPORTING ORM
var orm = require("../config/orm.js");


var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(response) {
      cb(response);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burgerName, cb) {
    orm.insertOne(function(response) {
      cb(response);
    });
  },
  updateONE: function(devoured, condition, cb) {
    orm.updateONE(devoured, condition, function(response) {
      cb(response);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
