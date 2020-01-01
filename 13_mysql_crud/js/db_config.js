const mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123123',
	database: 'test'
});

module.exports.connection = connection;