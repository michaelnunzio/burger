// Import the ORM to create functions that will interact with the database.
var orm= require("../config/orm.js");

//selectall insertOne updateOne from ORM

var burgers = {

    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },

    insertOne: function(newBurger, cb){
        orm.insertOne(newBurger, function(res){
            cb(res);
        });
    },

    updateOne: function(id, cb){
        orm.updateOne(id, function(res){
            cb(res);
        })
    }

}//burgers end

module.exports = burgers;