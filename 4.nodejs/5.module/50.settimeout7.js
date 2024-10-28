console.log("1. 타이머를 통한 비동기 처리");

function setTimeoutSync(message, delay){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log(message);
            resolve();
        }, delay)
    });
}

async function executeTask(){
    await setTimeoutSync("1. 첫번째 작업 : 1초후 실행", 1000);
    await setTimeoutSync("1. 첫번째 작업 : 1초후 실행", 1000);
    await setTimeoutSync("1. 첫번째 작업 : 1초후 실행", 1000);
    console.log("4. 모든 작업이 완료되었습니다.");
}

executeTask();
// setTimeout(() => {
//     console.log("1. 첫번째 작업 : 1초후 실행");
// }, 1000); //1초

// setTimeout(() => {
//     console.log("2. 두번째 작업 : 2초후 실행");
// }, 2000); //2초
// setTimeout(() => {
//     console.log("3. 세번째 작업 : 3초후 실행");
// }, 3000); //3초
// console.log("4. 모든 작업이 완료되었습니다.");