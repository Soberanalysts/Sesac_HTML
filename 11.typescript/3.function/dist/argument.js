"use strict";
// function greet(name?: string = "Guest", greeting: string): string {
function greet(name = "Guest", greeting) {
    // function greet(name: string = "Guest", greeting: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
//가변인자뒤에 필수인자가 올 수 없다
//가변인자와 필수인자를 섞을거면 필수인자를 앞에 써야한다
console.log(greet("Alice", "안녕"));
console.log(greet("Alice", "Hi"));
console.log(greet("Alice"));
console.log(greet());
