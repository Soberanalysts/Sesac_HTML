const Car = require('./Car');

class Sedan extends Car{
    constructor(brand, model, color){
        super(brand, model, color);
    }
    openTrunk(){
        console.log(`${this.brand}차 ${this.color}색 ${this.model} 트렁크 열림`);
    }

}

module.exports = Sedan;