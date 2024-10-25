const numbers = [1,2,3,4,5];
//                          이전리턴값 ,    현재값     =>(          함수연산        ),초기값
const sum =numbers.reduce((accumulator, currentValue)=>accumulator + currentValue, 0);

console.log(sum);

//모든 수의 곱셈??
const product = numbers.reduce((accumulator, currentValue)=>(accumulator*currentValue),1);
console.log(product);

//저 배열에서 가장 큰 값은??
const numbers2=[-10,-5,-20,-8,-15];

const max = numbers2.reduce((accumulator, currentValue) => (accumulator>currentValue) ? accumulator : currentValue,numbers2[0]);
console.log(max);
console.log(Math.max(10,5,20,8,15));

function my_max(num){
    let max=num[0];

    for(let i=0; i<num.length;i++){
        max = (max > num[i]) ? max : num[i];
    }
    return max;
}

console.log(my_max(numbers2));