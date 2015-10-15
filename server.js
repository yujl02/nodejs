

var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(handle, pathname, res);

		res.writeHead(200, {"Content=Type" : "text/plain"});
		res.write("Hello World!");
		res.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server Started on 8888 ports");
}

exports.start = start;