let mysql = require('mysql');
let http = require('http');
let querystring = require('querystring')
let connection = mysql.createConnection({
	host: '192.168.1.114',
	user: 'root',
	password: 'admin',
	database: 'msyd'
});

connection.connect();



http.createServer((req, res) => {
	console.log(req.url);
	console.log(req.method)
	// 路由（请求路径+请求方式）
	if (req.url.startsWith('/login') && req.method == 'GET') {

	} else if (req.url.startsWith('/login') && req.method == 'POST') {
		let pdata = '';
		req.on('data', (chunk) => {
			pdata += chunk;
		});
		console.log("pdata-->" + pdata)
		req.on('end', () => {
			console.log(pdata)
			let obj = querystring.parse(pdata);
			console.log(obj)
		});
	}
}).listen(8088, () => {
	console.log('running....');
});





//select
/*  */connection.query('SELECT * from vue_list limit 0,1', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results);
 });

connection.end();
