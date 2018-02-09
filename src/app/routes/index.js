module.exports = function(application) {
  application.get('/', function(req, res) {
    application.controllers.index.index(application, req, res);
  });
};
