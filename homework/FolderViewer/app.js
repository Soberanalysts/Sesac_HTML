const fs = require('fs');

let viewer= fs.readdirSync('./');

fs.readdir('./',(err,files)=>{
    if(err){
        console.log(err);
    }
    console.log(files);
});    
fs.readFile()