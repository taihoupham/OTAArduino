var fs = require ("fs");

var arduinofile = fs.readFileSync( __dirname + "/temp.ino");

arduinofile = arduinofile.toString();
//var x = "void loop() {";
//console.log(x.length);
var looppos = arduinofile.indexOf("void loop() {");
looppos = looppos + 13;
var endloop = arduinofile.lastIndexOf("}");
var loop = arduinofile.slice(looppos,endloop);

//console.log(loop);

module.exports = loop;