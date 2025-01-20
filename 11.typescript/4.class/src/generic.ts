function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));
//타입이 없다는게 아닌 그때마다 지정

function wrapInArray<T>(value: T): T[] {
    return [value]
}

console.log(wrapInArray<number>(5));
console.log(wrapInArray<string>("Hello"));

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


function getFirstElement<T>(array: T[]): T | undefined { //지정한 타입만 반환해야한다
    if (array.length === 0) {
        return undefined;   
    }
    const middleIndex = Math.floor(array.length / 2 );
    return array[middleIndex];
}
console.log(getFirstElement([1,2,3]));
console.log(getFirstElement([1,2,3,4]));
console.log(getFirstElement([1,2,3,4,5]));
console.log(getFirstElement<number>([]));

const middle: number | undefined = getFirstElement([1,2,3]);
const middle2: number = getMiddleElement([1,2,3]) ?? -1;  // 앞에 값이 없으면?? 뒤에 01이 기본값...
