//1. 숫자형 변수
let a= 10;
//부동소수점
let pi=3.14;

let sum = a+pi;
console.log(sum);

//상수 = 변경할 수 없음
const gravity = 9.81;
// gravity=10;

console.log("오류난 이후");

//불리언(boolean)
let isLogged = true;

if(isLogged) {
    console.log('사용자가 로그인 하였습니다');
} else{
    console.log('로그인이 필요합니다');
}

var globalA = 10;
let globalB = 20;

function myfunction(){
    let globalC = 30;
    console.log(`글로벌A: ${globalA}, 글로벌B: ${globalB}, 글로벌C: ${globalC}`);




















    globalA="50";



}

myfunction();
console.log(`글로벌A: ${globalA}, 글로벌B: ${globalB}`);
