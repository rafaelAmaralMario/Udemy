module.exports = function(app) {
    app.get("/formulario_inclusao_noticia", function(req, res) {
        res.render("admin/form_add_noticia", { erros: {}, noticia: {} });
    });
    app.post("/noticias/salvar", function(req, res) {
        var noticia = req.body;
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo precisa ter entre 10 a 100 caracteres').len(10, 100);
        req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD' });

        var erros = req.validationErrors();
        if (erros) {
            res.render("admin/form_add_noticia", { erros: erros, noticia: noticia });
            return;
        }
        var connect = app.config.dbConnection();
        var callback = function(error, result) {
            res.redirect('/noticias');
        }
        var noticiasModel = new app.app.models.NoticiasDAO(connect, callback);
        noticiasModel.saveNoticias(noticia);

    });
}