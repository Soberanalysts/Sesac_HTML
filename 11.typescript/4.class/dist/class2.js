"use strict";
class Animal {
    constructor(name) {
        // constructor (public name: string) {
        this.name = name;
    }
    makeSound() {
        console.log("동물소리. 멍멍/냐옹냐옹");
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    makeSound() {
        console.log(`${this.name} 멍멍`);
    }
}
const dog = new Dog('새싹', "골든리트리버");
console.log(`이름: ${dog.name}, 품종: ${dog.breed}`);
dog.makeSound();
