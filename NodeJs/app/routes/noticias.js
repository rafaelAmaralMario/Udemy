module.exports = function(app) {
    app.get("/noticias", function(req, res) {
        var connect = app.config.dbConnection();
        var callback = function(error, result) {
            res.render("noticias/noticias", { noticias: result });
        }
        var noticiasModel = new app.app.models.NoticiasDAO(connect, callback);
        noticiasModel.getNoticias();
    });
}