// function greet(name?: string = "Guest", greeting: string): string {
function greet(name: string = "Guest", greeting?: string): string {
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

const greet2 = (name:string = "Guest", age?: number): string => {
    return age ? `안녕, 나는 ${name} 이고 ${age} 살이야` : `안녕, 나는 ${name} 이야.`;
}

console.log(greet2());
console.log(greet2('bob'));
console.log(greet2('bob', 22));