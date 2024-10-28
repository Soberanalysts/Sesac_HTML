const numbers = [10, 15, 20, 25, 30];

// function aboveTwentyCondityon(n){
//     if(n>20){
//         return true;
//     } else {
//         return false;
//     }
// }
aboveTwentyCondityon=(n)=> n>20 ? true : false;

// function belowTwentyCondition(n){
//     // if(n<20){
//     //     return true;
//     // }else {
//     //     return false;
//     // }
//     let output = n<20 ? true : false;
//     return output;

// }
// belowTwentyCondition=(n)=> n<20 ? true : false;

// const aboveTwenty = numbers.filter(aboveTwentyCondityon);
// const aboveTwenty = numbers.filter((n)=> n>20 ? true : false);
const aboveTwenty = numbers.filter((n)=> (n>20));
console.log(aboveTwenty);

// const belowTwenty = numbers.filter(belowTwentyCondition);
const belowTwenty = numbers.filter((n)=> (n<20));
console.log(belowTwenty);
//------------------------------------------------

const numbers2=[1,2,3,4,5,6,7,8,9];

const evenNumbers = numbers2.filter(n => (n % 2 === 0));
const oddNumbers = numbers2.filter(n => (n % 2 === 1));

console.log(evenNumbers);
console.log(oddNumbers);

//특정 문자열을 필터링
const words = ["apple","banana","grape","blueberry","avocado"];
const containsA=words.filter((word) => word.includes('a'));
console.log(containsA);
console.log(words[1].includes('a'));

function containsALetter(word){
    console.log(words[1].includes('a'));
//    words.filter();
}

// for(let i=0; i <words.length ;i++){
//     containsALetter(words[i]);
// }

const people = [
    {name:"Alice", age:25},
    {name:"Bob", age:30},
    {name:"Charlie"},
    {name:"David", age:35},
]

const adults = people.filter((p)=>p.age>=30); //30세 이상.. >=
console.log(adults);

const people2=[
    {name:"Alice", age:25},
    {name:"Bob", age:30},
    {name:"Charlie"},
    {name:"David", age:35},
]

const unknownAge = people.filter(p=>!p.hasOwnProperty('age')); //나이가 없는 사람을 
console.log(unknownAge);
