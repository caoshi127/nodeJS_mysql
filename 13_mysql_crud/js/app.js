const express = require('express');
const app = express();
const dao = require('./dao');

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

var result = {
	"status": "200",
	"message": "success", 
}

var promise = dao.selectAll();

promise.then(function(value) {
	// console.log(value);
	result.data = value;
    app.get('/info',function(req,res){
        res.status(200),
        res.json(result)
    });

     //配置服务端口
    var server = app.listen(3000, function () {
	    var host = server.address().address;
	    var port = server.address().port;
	        console.log('Example app listening at http://%s:%s', host, port);
    });

	return value;
}, function() {});
