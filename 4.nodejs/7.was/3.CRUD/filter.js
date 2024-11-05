
const data = {bbb:'bbb', aaa:'aaa'};
const deleteData = 'aaa';

let array = ['aaa', 'bbb']

console.log("삭제전", data);

let result = array.filter((key) => key === deleteData);

// if (deleteData in data) {
//     delete data.deleteData;
//     console.log(`Deleted data: ${deleteData}`);
// }  else {
//     console.log(`No data found for key: ${deleteData}`);
// }
delete data.aaa;
console.log("삭제후", data);
// console.log(deleteData);
console.log(result);
// console.log(result);