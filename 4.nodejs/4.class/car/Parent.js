const Person = require('./Person');

class Parent extends Person{
    constructor(name, age, gender){
        super(name, age, gender);
    }
    driveCar(){
        console.log(`운전자는 ${this.name}씨는 부모님이고 ${this.age} ${this.gender}`);
    }
}


module.exports = Parent;