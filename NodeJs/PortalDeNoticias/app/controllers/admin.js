module.exports.formulario_inclusao_noticia = function(app, req, res) {
    res.render("admin/form_add_noticia", { erros: {}, noticia: {} });
}

module.exports.noticias_salvar = function(app, req, res) {
    var noticia = req.body;
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo precisa ter entre 10 a 100 caracteres').len(10, 100);
    req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD' });

    var erros = req.validationErrors();
    if (erros.length > 0) {
        res.render("admin/form_add_noticia", { erros: erros, noticia: noticia });
        return;
    }
    var connect = app.config.dbConnection();
    var callback = function(error, result) {
        res.redirect('/noticias');
    }
    var noticiasModel = new app.app.models.NoticiasDAO(connect, callback);
    noticiasModel.saveNoticias(noticia);
}