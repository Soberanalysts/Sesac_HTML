const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let wallet=0;

function intro() {
  console.log(`
        ATM 메뉴 :
        1. 잔액 확인
        2. 입금
        3. 인출
        4. 종료
        원하는 작업을 선택하세요 : `);
}

intro();

rl.on("line", (input) => {
  const num = parseInt(input);
  if (num === 1) {
    console.log(`=> 현재 잔액은 ${wallet}원 입니다`);
    intro();
  } else if (num === 2) {
    rl.question('입금할 금액을 입력하시오: ', (money) => {
        const change = parseInt(money);
        wallet +=change;
        console.log(`=>${change}원이 입금되었습니다.`);
        intro();
    });
  } else if (num === 3) {
    rl.question('인출할 금액을 입력하시오: ', (money) => {
        const change = parseInt(money);
        
        if((wallet-change)<0){
            console.log(`=>잔액이 부족합니다`);
        }else{
            wallet -=change;
            console.log(`=>${change}원을 인출했습니다.`);
            
        }
        intro();
    });
  } else if (num === 4) {
    console.log(`=>ATM을 종료합니다`);
    rl.close();
  } else {
    console.log("올바른 입력값이 아닙니다.");
    intro();
  }
});
