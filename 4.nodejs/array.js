const numbers = [1,2,3,4,5];
const fruits = ['apple','banana','orange'];
const mixed = [1, 'hello', null, {key:"value"}];

console.log(numbers[0]);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);

fruits[1]='BANANA';
console.log(fruits[1]);

//배열 순회
//1. literate 순회하는 방식
// for(let i=0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }


// 2.fruits.forEach(callback함수) 콜백함수 등록 형태
function print_fruits(fruit){
    console.log(fruit);
}

fruits.forEach(print_fruits);

fruits.forEach((fruit)=>{
    console.log(fruit)
});

fruits.forEach((fruit)=>{
    console.log(fruit);
})

console.log('----------------');
console.log(numbers);

const num_length=numbers.push(6);   //맨뒤에 삽입
console.log(numbers);
console.log("배열의 길이는: ",num_length)
const removed_elem=numbers.pop();
numbers.pop();  //맨뒤에꺼 삭제
console.log(numbers);
console.log("삭제된 항목은: ", removed_elem);

const sliceArray = fruits.slice(1,3); // 배열 내의 1부터 3전까지... 즉 1과 2를 의미함
console.log(sliceArray);
console.log(fruits);

const sliceNumbers = numbers.slice(2,4);
console.log(sliceNumbers);



console.log('----------------');
const removedElement = numbers.splice(1,2);
console.log(numbers);

//배열 합치기
const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [7,8,9];

const mergedArray = array1.concat(array2, array3);
console.log(array1);
console.log(array2);
console.log(array3);
console.log(mergedArray);

const mergeArrayWithSpread = [...array1, ...array2];
console.log(mergeArrayWithSpread)

const originalArray=[1,2,3];
const elementsToInsert =[4,5,6];

originalArray.splice(1,0, ...elementsToInsert);//1번 인덱스부터 0개를 삭제하라고 시키면서 중간에 삽입
console.log(originalArray);
