module.exports.noticia = function(app, req, res) {
    var noticia = req.query;
    var connect = app.config.dbConnection();
    var callback = function(error, result) {
        res.render("noticias/noticia", { noticia: result });
    }
    var noticiasModel = new app.app.models.NoticiasDAO(connect, callback);

    noticiasModel.getNoticia(noticia);
}
module.exports.noticias = function(app, req, res) {
    var connect = app.config.dbConnection();
    var callback = function(error, result) {
        res.render("noticias/noticias", { noticias: result });
    }
    var noticiasModel = new app.app.models.NoticiasDAO(connect, callback);
    noticiasModel.getNoticias();
}