class MathOperations{
    static add(x,y){
        return x+y;
    }
    static sub(x,y){
        return x-y;
    }
}

// const sum = new MathOperations(); //객처를 생성, 실체화(instatiation)
// console.log(sum.add(2,3));

const sum = MathOperations.add(2,4);
console.log(sum);
const diff = MathOperations.sub(2,4);
console.log(diff);