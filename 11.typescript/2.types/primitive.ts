let username: string = 'John';
console.log(`Username: ${username}`);


let age: number = 30;
console.log(`Age ${age}`);

let isAdmin: boolean = true;
isAdmin = false;
console.log(`관리자냐: ${isAdmin}`);

let unknownValue: any = "아무거나";
unknownValue = 5;
unknownValue = true;
console.log(`아무타입: ${unknownValue}`);

let undefinedValue: undefined = undefined;
// undefinedValue = 1;
console.log(`Undefined value: ${undefinedValue}`);

let nullValue: null = null;
// nullValue = undefined;
console.log(`Null value: ${nullValue}`);

let notype = null;
notype = 'a';
notype = 1;