console.log("몇단을 출력할까요?");

let input = require('fs').readFileSync('./input').toString().split('\n');
console.log(input);

// console.log("구구단")
;

// for(let j=1;j<10;j++){
//     console.log(`${j}단`);
    for(let i=1;i<10;i++){
    console.log(`${Number(input)}*${i}=${i*Number(input)}`);
// }
}
