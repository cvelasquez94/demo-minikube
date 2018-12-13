const http = require('http');

const handleRequest = function (req, res) {
	console.log('Received request for url: ' + req.url);
	res.writeHead(200);
	res.end('demo ready!');
};

let www = http.createServer(handleRequest);
www.listen(3500);
