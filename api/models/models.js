var ExpressCassandra = require('express-cassandra');

var dbHost   = process.env.DBHost ?  process.env.DBHost : 'wiredcraft-db';
var dbPort   = process.env.DBPort ? process.env.DBPort :  9042;
var dbName   = process.env.DBName ? process.env.DBName : 'wiredcraft';

var models = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: [dbHost],
        protocolOptions: { port: dbPort },
        keyspace: dbName,
        queryOptions: {consistency: ExpressCassandra.consistencies.one}
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});

module.exports = models
