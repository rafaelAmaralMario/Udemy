module.exports.startChat = function(application, req, res) {
    var dados_form = req.body;
    req.assert('nome', 'Nome ou apelido obrigatorio').notEmpty();
    req.assert('nome', 'Nome ou apelido precisa ter entre 3 e 15 caracteres').len(3, 15);

    var erros = req.validationErrors();

    if (erros) {
        res.render("home/index", { erros: erros });
        return;
    }

    res.render("chat/chat", { erros: {} });
}