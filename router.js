function route(handle, pathname, res) {
	console.log("About to route a request for " + pathname);

	if (typeof handle[pathname] === 'function') {
		handle[pathname](res);
	} else {
		console.log("No Request handler found for " + pathname);
		//return "404 Not found";
		res.writeHead(404, {"Content-Tyep" : "text/plain"});
		res.write("404 Not Found");
		res.end();

	}
}

exports.route = route;