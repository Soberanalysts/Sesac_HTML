const Person = require('./Person');

class Child extends Person{
    constructor(name, age, gender, grade){
        super(name, age, gender);
        this.grade=grade;
    }
    playInCar(){
        console.log(`차안에서 노는아이 ${this.name}는 ${this.age}세 ${this.grade} ${this.gender}아이`);
    }
    Sing(){
        console.log(`차안에서 노래하는아이 ${this.name}는 는 ${this.age}세 ${this.grade} ${this.gender}아이`);
    }
}


module.exports = Child;