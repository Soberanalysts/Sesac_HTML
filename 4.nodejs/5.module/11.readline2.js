const readline=require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
})

rl.question('구구단의 단을 입력하시오 : ', (input) => {
    const num = parseInt(input);
    if(isNaN(num) || num<0 || num>9){
        console.log('올바른 입력값이 아닙니다.');
        rl.close();
        return;
    }
    console.log(`${input}단을 입력하셨습니다.`);
    for(let i=1;i<10;i++){
        console.log(`${Number(input)}*${i}=${i*Number(input)}`);
    }
    rl.close();
})