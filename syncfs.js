var fs = require('fs');

if (process.argv.length < 2) {
	console.log("Usage: node syncfs.js <file path>");
} else {
	console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length-1);
}