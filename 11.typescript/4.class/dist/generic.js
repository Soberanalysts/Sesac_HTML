"use strict";
function identity(value) {
    return value;
}
console.log(identity("Hello"));
console.log(identity(42));
//타입이 없다는게 아닌 그때마다 지정
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray(5));
console.log(wrapInArray("Hello"));
// function getFirstElement<T>(array: T[]): T {
//     if (array.length === 0) {
//         return undefined;   //지정한 타입만 반환해야한다
//     }
//     return array[0];
// }
// function getFirstElement<T>(array: T[]): T | undefined { 
//     if (array.length === 0) {
//         return undefined;   
//     }
//     return array[0];
// }
// console.log(getFirstElement<number>([]));
function getFirstElement(array) {
    if (array.length === 0) {
        return undefined;
    }
    const middleIndex = Math.floor(array.length / 2);
    return array[middleIndex];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement([1, 2, 3, 4]));
console.log(getFirstElement([1, 2, 3, 4, 5]));
console.log(getFirstElement([]));
