var ls = require('./ls_module');

if (process.argv.length < 4) {
  console.log("Usage: node syncfs.js <file path> <extension filter>");
} else {

  var dir = process.argv[2].toString();
  var ext = process.argv[3].toString();

  ls(dir, ext, function(err, list) {
    if (err) {
      console.log("An error occured: " + err);
    } else {
      for (var i = 0; i < list.length; i++)
        console.log(list[i]);
    }
  });
}