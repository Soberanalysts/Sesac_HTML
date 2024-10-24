class Shape{
    getArea(r){
        console.log(space);
    }
}
class Square extends Shape{
    constructor(sidelength){
        super();
        this.length = sidelength;
    }
    getArea(r){
        return this.length**2;
    }
}

class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
    getArea(){
        console.log(space);
    }
}

class Circle extends Shape{
    getArea(r){
        console.log(space);
    }
}

class Trapezium extends Shape{
    getArea(r){
        console.log(space);
    }
}

const square = new Square(5);
const triangle = new Triangle(5);
const circle = new Circle(5);
const trapezium = new Trapezium(5);

console.log("Square Area:", square.getArea()); //출력 25
console.log("Triangle Area:", triangle.getArea()); //출력 6
console.log("Circle Area:", circle.getArea()); //출력 25
console.log("Trapezium Area:", trapezium.getArea()); //출력 28 27


