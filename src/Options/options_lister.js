//This file does not need to be included in npm package.
//This file should be run before updting.

var sep = require("path").sep;
var file = __dirname+sep+"option_keys.js";
var options = require("./Options");
var ignores = ["default_ignore_paths"];
var list = listKeys(options,ignores);
var comment = "/*\n"+
" * Do not edit this file manually.\n"+
" * Update this file by ./options_lister.js\n"+
"*/\n";
var data = comment+="module.exports ="+JSON.stringify(list,null,"\t");
//write
require("fs").writeFileSync(
  file,data,{encoding:"utf-8",flags:"w"}
);

function listKeys(options,ignores){
  var list = {};
  for(var key in options){
    //ignore
    if(ignores.includes(key))continue;
    //assign
    list[key] = key;
  }
  return list;
}