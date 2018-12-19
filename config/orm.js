var connection = require("../config/connection.js");

orm ={
    selectAll: function(cb) { //to view everything in burgers
        var queryString= "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
            if (err) throw err;

            cb(result)

            console.log(result);
        });
    },//selectall done

    insertOne: function(newBurger, cb){
        var queryString= "INSERT INTO burgers SET ?";
        console.log(queryString)
        connection.query(queryString, {

            burger_name: newBurger,
            devoured: false
          },
          function(err, result) {
        if (err) throw err;

        cb(result)

        console.log(result);
      });
    },//insertOne done

    updateOne: function(thisID, cb){
        var queryString= "UPDATE burgers SET devoured = true WHERE ?";
            console.log(queryString);
            connection.query(queryString,
            
            [{ id: thisID}], //where ID = theID created. Tested in workbench. 
            
            function(err, result) {
                if (err) throw err;
                cb(result)
                console.log(result);
                });
     },
        
} //orm end

module.exports = orm;

