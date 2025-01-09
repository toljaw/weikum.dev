const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(req, res) {
	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'indexCoffeeShop.html' : req.url);

	fs.readFile(filePath, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.write('404 Not Found');
			res.end();
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		}
	});
}).listen(3000);

console.log("Server started on port 3000");