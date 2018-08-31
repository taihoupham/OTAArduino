var fs = require ("fs");

var arduinofile = fs.readFileSync( __dirname + "/temp.ino");

arduinofile = arduinofile.toString();

var initpos = arduinofile.indexOf("void setup()");
var header = arduinofile.slice(0,initpos);

//console.log(header);

module.exports = header;