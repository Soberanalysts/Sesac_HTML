
const data = {b:'bbb', a:'aaa'};
const deleteData = 'a';

let array = ['aaa', 'bbb']

console.log(data.deleteData);
// let result = array.filter((key) => key == deleteData);
let result = array.map((key) => key !== deleteData);

console.log(result);
if (deleteData in data) {
    delete data.deleteData;
    console.log(`Deleted data: ${deleteData}`);
}  else {
    console.log(`No data found for key: ${deleteData}`);
}
delete data.aaa;

