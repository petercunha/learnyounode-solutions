var fs = require('fs');
var path = require('path');

if (process.argv.length < 4) {
  console.log("Usage: node syncfs.js <file path> <extension filter>");
} else {

  var dir = process.argv[2].toString();
  var ext = "." + process.argv[3].toString();

  fs.readdir(dir, function(err, list) {
    for (var i = 0; i < list.length; i++)
      if (path.extname(list[i]) == ext) {
        console.log(list[i]);
      }
  });
}
