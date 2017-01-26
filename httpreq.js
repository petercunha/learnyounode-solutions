var http = require('http');

var URL = process.argv[2];

http.get(URL, function(resp) {
	resp.on("data", function(data) {
		console.log(data.toString());
	})
});