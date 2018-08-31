var express = require ("express");
var app = express();
app.listen(8000);

var bodyParser = require ('body-parser');
var urlencodeParser = bodyParser.urlencoded({extended:false});

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(req, res){
    res.render("form", {data:""});
});
var fsread = require("fs");
var usercodetemp = fsread.readFileSync( __dirname + "/temp.ino");


app.post("/upload", urlencodeParser, async function(req,res){
    var usercode = req.body.data;
    res.render("form", {data:usercodetemp});
    var fswrite = require ("fs");
    await fswrite.writeFile('temp.ino', usercode, 'utf8', await function(err){
      if(err)
          throw err;
      else
          console.log('Temp writed');
          var header = require("./header.js");
          var init = require("./init.js");
          var loop = require("./loop.js");    
          replace(header,init,loop);
          
    });
    
});

function replace(header,init,loop){
    var fsread2 = require ("fs");

    var ota = fsread2.readFileSync( __dirname + "/ota.ino");
    
    ota = ota.toString();
    
    ota = ota.replace("(userheader)",header);
    ota = ota.replace("(userinit)",init);
    ota = ota.replace("(userloop)",loop);
    
    //console.log(ota);
    
    var fswrite = require ("fs");
    fswrite.writeFile('newimage.ino', ota, 'utf8', function(err){
        if(err)
            throw err;
        else
            console.log('Done');
    });    
}






usercodetemp = usercodetemp.toString();
//console.log(usercodetemp);
app.get("/upload", function(req,res){
    res.render("form", {data:usercodetemp});
});


