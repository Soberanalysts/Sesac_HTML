// const readline = require('readline');    //CommonJS 레거시한 방식
// import readline from 'readline';    //ES6방식

var readline = require('linebyline');
var rl = readline('./example.txt');

rl.on('line', function(line, lineCount, byteCount){
    console.log(line, lineCount, byteCount)
}).on('error', function(e){
    //something went wrong
    console.log("어.. 뭔가 오류 발생...", e.message);
})