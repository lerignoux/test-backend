var ExpressCassandra = require('express-cassandra');

var dbHost   = process.env.dbHost || 'wiredcraft-db';
var dbPort   = process.env.dbPort || 9042;
var dbName   = process.env.dbName || 'wiredcraft';

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
