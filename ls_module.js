var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {

	ext = "." + ext;

	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err);
		}

		var arr = [];

		for (var i = 0; i < list.length; i++)
			if (path.extname(list[i]) == ext)
				arr.push(list[i]);

		callback(null, arr);
	});
}
