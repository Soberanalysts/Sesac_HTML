function greet(name){
    console.log('Hello, ' + name);
}

greet("John");
greet("Tom");
greet("shpark");
greet("kim");

function add(a,b){
    return a+b;
}

let sum=add(2,3);
console.log(sum);

console.log(add(5,10));

let sum2 = function(a,b){
    return a+b;
}
console.log(sum2(2,3));

//변수에 함수르 담는데, function 이라는 불필요한 키워드를 없애기 위해 화살표 함수 생겨남

let sum3 =(a,b) =>{
    return a+b;
}

console.log(sum3(4,7));

let sum4=(a,b)=>a+b;

console.log(sum4(10,24));


let minus=(a,b) =>a-b;

console.log(minus(11,3));

let multiply=(a,b)=>a*b; 

let division=(a,b)=>a/b;
console.log(multiply(7,11));
console.log(division(100,10));


//일반함수4개
console.log("NormalFunction")
function normalsum(a,b){
    return a+b;
}
function normalmin(a,b){
    return a-b;
}
function normalmul(a,b){
    return a*b;
}
function normaldiv(a,b){
    return a/b;
}
console.log(normalsum(10,24));
console.log(normalmin(11,3));
console.log(normalmul(7,11));
console.log(normaldiv(5,100));


//화살표함수 4개
console.log("ArrowFunction")
let Arrowsum=(a,b)=>a+b;
let Arrowminus=(a,b) =>a-b;
let Arrowmultiply=(a,b)=>a*b; 
let Arrowdivision=(a,b)=>a/b;

console.log(Arrowsum(10,24));
console.log(Arrowminus(11,3));
console.log(Arrowmultiply(7,11));
console.log(Arrowdivision(-1,10));