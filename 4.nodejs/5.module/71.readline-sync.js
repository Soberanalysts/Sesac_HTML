const readlineSync = require('readline-sync');

const answer1 = readlineSync.question('첫번쨰 숫자를 입력하시오: ');
console.log(`첫번째 숫자는 ${answer1} 입니다.`)

const answer2 = readlineSync.question('두번째 숫자를 입력하시오: ');
console.log(`두번째 숫자는 ${answer2} 입니다.`)
