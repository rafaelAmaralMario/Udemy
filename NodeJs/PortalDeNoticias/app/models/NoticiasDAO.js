function NoticiasDAO(connect, callback) {
    this._connect = connect;
    this._callback = callback;


}

NoticiasDAO.prototype.getNoticias = function() {
    this._connect.query('select * from noticias', this._callback);
}
NoticiasDAO.prototype.getNoticia = function(noticia) {
    this._connect.query('select * from noticias where id =  ' + noticia.id, this._callback);
}
NoticiasDAO.prototype.saveNoticias = function(noticia) {
    this._connect.query('insert into noticias set ? ', noticia, this._callback);
}

NoticiasDAO.prototype.getLastNews = function() {
    this._connect.query('select * from noticias ORDER BY data_criacao DESC LIMIT 5', this._callback);
}
module.exports = function() {
    return NoticiasDAO;
}