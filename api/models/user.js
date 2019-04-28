const models = require('./models');

var UserModel = models.loadSchema('User', {
    fields:{
        id: {
            type: "uuid",
            rule: {
                validator: function(value) {return value !== undefined},
                required: true,
                message: "User id cannot be empty"
          }
        },
        name: {
            type: "text",
            rule: {
                validator: function(value) {return value !== undefined},
                required: true,
                message: "Username cannot be empty"
          }
        },
        dob         : "timestamp",
        address     : "text",
        description : "text",
        createdAt   : {
            type: "timestamp",
            default: {"$db_function": "toTimestamp(now())"}
        }
    },
    key:["id"]
});

// sync the schema definition with the cassandra database table
// if the schema has not changed, the callback will fire immediately
// otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
UserModel.syncDB(function(err, result) {
    if (err) throw err;
    // result == true if any database schema was updated
    // result == false if no schema change was detected in your models
});

module.exports = UserModel
