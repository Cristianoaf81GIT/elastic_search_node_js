const elasticsearch = require('elasticsearch')

exports.client = new elasticsearch.Client({
    host: 'http://elastic:admin@localhost:9200',
    // node: 'http://localhost:9200',
    // httpAuth: 'elastic:admin',
    log: 'trace',    
})