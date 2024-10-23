const Car = require('./Car');

class SUV extends Car{
    constructor(brand, model, color){
        super(brand, model, color);
    }
    offRoad(){
        console.log(`${this.brand}차 ${this.color}색 ${this.model}가 길을 이탈했다`);
    }
}


module.exports = SUV;