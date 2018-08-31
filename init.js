var fs = require ("fs");

var arduinofile = fs.readFileSync( __dirname + "/temp.ino");

arduinofile = arduinofile.toString();
//var x = "void setup() {";
//console.log(x.length);
var initpos = arduinofile.indexOf("void setup() {");
initpos = initpos + 14;
var endinit = arduinofile.indexOf("}");
var init = arduinofile.slice(initpos,endinit);

//console.log(init);

module.exports = init;