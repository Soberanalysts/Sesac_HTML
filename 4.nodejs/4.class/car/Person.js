class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age=age;
        this.gender=gender;
    }
    greet(){
        console.log(`안녕, 나는 ${this.name}이고, ${this.age}살이야`);
    }
    getInCar(car){
        console.log(`${this.name}가 ${car.model}에 탔습니다.`);
    }


}
module.exports = Person;