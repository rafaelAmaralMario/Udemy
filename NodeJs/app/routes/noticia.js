module.exports = function(app) {

    app.get("/noticia/*", function(req, res) {
        var noticia = req.url.replace("/noticia/", "");
        var connect = app.config.dbConnection();
        var callback = function(error, result) {
            res.render("noticias/noticia", { noticia: result });
        }
        var noticiasModel = new app.app.models.NoticiasDAO(connect, callback);

        noticiasModel.getNoticia(noticia);
    });
}