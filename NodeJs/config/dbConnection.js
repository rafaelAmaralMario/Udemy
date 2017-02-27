var mysql = require('mysql');

var connMySQL = function() {
    console.log('BD Access');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
}
module.exports = function() {
    console.log('autoload module bd');
    return connMySQL;
}