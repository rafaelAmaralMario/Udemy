module.exports.home = function(app, req, res) {
    var connect = app.config.dbConnection();
    var callback = function(error, result) {
        res.render("home/index", { noticias: result });
    }
    var noticiasDAO = new app.app.models.NoticiasDAO(connect, callback);
    noticiasDAO.getLastNews();

}