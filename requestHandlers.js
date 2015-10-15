var exec = requre("child_process").exec;

function start(res) {
	console.log("Request handler 'start' was called");
	var content = "empty";

	exec("dir /w", function (eror, stdout, called) {
		content = stdout;
	res.writeHead(200, {"Content-Tyep" : "text/plain"});
	res.write(content);
	res.end();
});

	// return content;

	// ction sleep(milliSeconds) {
	// 	var startTime = new Date().getTime();
	// 	while (new Date().getTime() < startTime + milliSeconds);
	// }
	// sleep(10000);

	// return "hello start";
}

function upload(res) {
	console.log("Request handler 'upload' was called");
	res.writeHead(200, {"Content-Tyep" : "text/plain"});
	res.write("hello upload");
	res.end();
}

exports.start = start;
exports.upload = upload;