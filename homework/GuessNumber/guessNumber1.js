const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = Math.floor(Math.random() * 100);
// console.log(solution);


console.log(`1부터 100사이의 숫자를 맞춰보세요 : `);

rl.on("line", (input) => {
  const num = parseInt(input);
  if (isNaN(num) || num < 0 || num > 99) {
    console.log("올바른 입력값이 아닙니다.");
    console.log("1부터 100사이의 숫자를 맞춰보세요 : ");
    // rl.close();
  } else if (num < solution) {
    console.log(`더 큰 숫자입니다`);
    console.log("1부터 100사이의 숫자를 맞춰보세요 : ");
  } else if (num > solution) {
    console.log(`더 작은 숫자입니다`);
    console.log("1부터 100사이의 숫자를 맞춰보세요 : ");
  } else {
    console.log(`정답입니다`);
    rl.close(); // 입출력 처리 종료
    return;
  }
  
//   console.log(`1부터 100사이의 숫자를 맞춰보세요 : `);
});
