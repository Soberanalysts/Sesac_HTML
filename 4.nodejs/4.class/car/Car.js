class Car{
    constructor(brand, model, color){
        this.brand = brand;
        this.model=model;
        this.color=color;
    }
    start(){
        console.log(`${this.brand}자동차 ${this.color}색 ${this.model}가 달리기 시작`);
    }
    stop(){
        console.log(`${this.brand}자동차 ${this.color}색 ${this.model}가 멈췄다`);
    }
    drive(){
        console.log(`${this.brand}자동차 ${this.color}색 ${this.model}는 운전중이다`);
    }
}

module.exports = Car;