function sayHello(){
    console.log('안녕하세요!!')
}

doSomething(sayHello);

//함수를 반환하는 고차 함수 ... 배수기 ... x n을 해주는 함수를 만들어서 반환하기..
function createMultiplier(multiplier){
    return function(x) {
        return x*multiplier;
    };
}

const double = createMultiplier(2); // 2의 배수를 만들어주는 함수를 내놔~

console.log(double(5)); // 두배 해주는 함수...

const quad = createMultiplier(4);   //4배수 해주는 함수를 내놔

console.log(quad(5));