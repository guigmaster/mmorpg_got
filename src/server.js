var http   = require('http');
var path   = require('path');
var dotenv = require('dotenv');

var app   = require('./app');
var utils = require('./utils');

dotenv.config({ path: path.join(__dirname, '../.env') });

var server = http.createServer(app);
var port   = process.env.PORT || 3000;

server.listen(port);
server.on('error', utils.onError(server));
server.on('listening', utils.onListening(server));
