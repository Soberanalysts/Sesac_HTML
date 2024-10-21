let a=10;
let b=5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let x=10;
x +=5;
console.log(x);

x-=3;
console.log(x);

x*=2;
console.log(x);

console.log(a>b);
console.log(a<b);

//논리연산자
let sunny=true;
let warm=false;

console.log(sunny && warm);
console.log(sunny || warm);


console.log('-----');
console.log(1&&0);
console.log(0&&1);
console.log(2&&3);  //1이거나 나머지 숫자는 다 true
console.log(3&&2);  //1이거나 나머지 숫자는 다 true(AND는 끝까지 연산하므로 뒤에연산한것이 출력)

console.log('--OR---');
console.log(1 || 0);
console.log(0 || 1);
console.log(2 || 3);  //OR는 하나라도 true면 뒤 연산은 안한다
console.log(3 || 2);  //OR는 하나라도 true면 뒤 연산은 안한다

