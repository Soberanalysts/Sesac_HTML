class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    drive(){
        return `${this.make}의 ${this.model} 이 순항중입니다`
    }
    open(){
        return `${this.make}의 ${this.model} 이 열렸습니다`
    }
    close(){
        return `${this.make}의 ${this.model} 이 닫혔습니다`
    }
}

const myCar = new Car("현대차","KS");
const status2 = myCar.drive();

console.log(status2);
console.log(myCar.open());
console.log(myCar.close());