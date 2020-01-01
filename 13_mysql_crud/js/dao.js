const mysql = require('mysql');
const entity = require('./entity');
const db_config = require('./db_config');

var User = entity.User;

// 连接数据库
var connection = db_config.connection;
connection.connect();

function selectAll() {
	var promise = new Promise(function(resolve, reject) {
		var sql = "select * from t_user";
		var users = [];
		connection.query(sql, function(err, result) {
			if (err) {
				console.log("[SELECT ERROR] - ", err.message);
				return;
			}
			result.forEach((value) => {
				var u = new User(value.id, value.name, value.age, value.address, value.birthday);
				users.push(u);
			});
			resolve(users);
			connection.end();
		});
	});
	return promise;
}

module.exports.selectAll = selectAll;
