var fs = require('fs');

if (process.argv.length < 2) {
	console.log("Usage: node syncfs.js <file path>");
} else {
	var path = process.argv[2].toString();

	fs.readFile(path, function (err, contents) {
		var lines = contents.toString().split('\n').length-1;
		console.log(lines);
	});
}