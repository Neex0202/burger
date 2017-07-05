//IMPORTING connection.js
var connection = require("./connection.js");



// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

};

    //CREATING METHODS to execute mySQL commands ie (CRUD/RESTful)
    var orm = {

        selectAll(tableInput, cb) {
            var queryString = "SELECT * FROM ??;";
            connection.query(queryString, [tableInput], function(err, result) {
                if (err) throw err;
                console.log(result);
                return result;
            });
            cb(result);
        },


        insertOne(burgerName, cb) {
            var queryString = "INSERT INTO burgers (burger_name) VALUE ";
            queryString += burgerName.toString();

            connection.query(queryString, [burgerName], function(err, result) {
                if (err) throw err;
                console.log(result);
                return result;
            });
            cb(result);
        },


        updateONE(devoured, condition, cb) {
            var queryString = "UPDATE burgers SET "
            queryString += " SET ";
            queryString += objToSql(devoured);
            queryString += " WHERE ";
            queryString += condition;

            console.log(queryString);
            connection.query(queryString, function(err, result) {
                console.log(result);
                if (err) throw err;
               
                return result;
            });
            cb(result);
        }



    };

    //export ORM
    module.exports = orm;
