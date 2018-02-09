// Node util library
var util = require('util');
var MongoClient = require('mongodb').MongoClient;

module.exports = function(app) {

  var url = util.format(
    'mongodb://%s:%s',
    process.env.DB_HOST,
    process.env.DB_PORT
  );

  MongoClient.connect(url, function(err, client) {
    if (err) {

      throw err;
    }
    var db = client.db(process.env.DB_NAME)

    app['db'] = db;
  });

};
