"use strict";
class Person {
    constructor(name, age, isEmployed) {
        this.name = name;
        this.age = age;
        this.isEmployed = isEmployed;
    }
    sayHello() {
        return `안녕, 나는 ${this.name} 이고, 나이는 ${this.age} 야.`;
    }
}
const person = new Person("Alice", 30, true);
console.log(person.sayHello());
