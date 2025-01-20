const arr = ['mon','tue','wed','thu'];


// const day1 = arr.map(p => console.log(p));
const day1 =  arr.forEach(p => console.log(p));
const day2 = arr.map(p => `${p}`);
const day3 = arr.map(p => {return p});
// const day4 = (p) => {
//     arr.forEach(p => console.log(p));
// }

console.log(day1);
console.log(day2);
console.log(day3);
// day4(arr);