module.exports = function(application) {
  application.get('/jogo', function(req, res) {
    application.controllers.jogo.jogo(application, req, res);
  });
}
