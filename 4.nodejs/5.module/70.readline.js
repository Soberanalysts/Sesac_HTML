const readline = require('readline');

console.log("입력값 받기전");

function askQuestion(query){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve)=>{
        rl.question("원하는 값을 입력하시오 : ",(answer)=>{
            console.log(`입력한 값은: ${answer}`);
            resolve(answer);
            rl.close();
        });   
    })
 
}
// const result = askQuestion("원하는 값을 입력하세요: ");
// console.log(result);
async function askQuestions(){
    const answer1 = await askQuestion("원하는 값 1을 입력하세요: ")
    console.log(`입력한 값1은: ${answer1}`)

    const answer2 = await askQuestion("원하는 값 2을 입력하세요: ")
    console.log(`입력한 값2은: ${answer2}`)
    // .then((answer) => {
    //     console.log(`입력한 값1은: ${answer}`);
    //     return askQuestion("원하는 값2을 입력하세요")
    // })
    // .then((answer) => {
    //     console.log(`입력한 값은: ${answer}`);
    //     console.log(`입력종료`);
          
    // })
}


askQuestions();
console.log("끝");