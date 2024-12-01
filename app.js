const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(req, res) {
	const filePath = path.join(__dirname, 'index.html');
	fs.readFile(filePath, function(err, data) {
		if (err) {
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.write('Internal Server Error');
			res.end();
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		}
	});
}).listen(3000);

console.log("Server started on port 3000");