const http = require('http');

http.createServer(function(req, res) {
	res.write("One step closer to being a full stack engineer!");
	res.end();
}
).listen(3000);

console.log("Server started on port 3000");
