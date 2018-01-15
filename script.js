var Converter = require("csvtojson").Converter;
var converter = new Converter({});
var arqJson = require("jsonfile");

converter.fromFile("./input.csv", function(err, json){

    if(err){
        console.log("ERRO");
        console.log(err);
    }

    //console.log(json);

    arqJson.writeFile("./output.json", json, {spaces: 2}, function(err){
    })
});
