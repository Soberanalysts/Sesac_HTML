
const data = {b:'bbb', a:'aaa'};
const deleteData = 'b';

let array = ['aaa', 'bbb']

console.log(data.deleteData);
let result = array.filter((key) => key === deleteData);

// if (deleteData in data) {
//     delete data.deleteData;
//     console.log(`Deleted data: ${deleteData}`);
// }  else {
//     console.log(`No data found for key: ${deleteData}`);
// }
delete data.aaa;
