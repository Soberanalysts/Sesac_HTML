class Shape{
    constructor(type){
        this.type=type;
    }
    static check(){
        return `${this.type}에서 정적 메서드 사용확인`
    }
    getArea(){
        console.log(`${this.type}의 넓이 : `);
    }
    toString(){
        return `출력 : ${this.type}-Area: ${this.getArea()} m2`
    }
}

class Square extends Shape{
    constructor(a){
        super('Square');
        this.length=a;
    }
    getArea(){
        return this.length **2;
    }
    getInfo(){
        return `이것은 ${this.type}이고 한변의 길이는 ${this.length} `
    }
}
class Triangle extends Shape{
    constructor(a,b){
        super('Triangle');
        this.lowerSide=a;
        this.height=b;
    }
    getArea(){
        return this.lowerSide * this.height / 2;
    }
    getInfo(){
        return `이것은 ${this.type}이고 아랫변의 길이는 ${this.lowerSide} 높이는 ${this.height}이다 `
    }

}
class Circle extends Shape{
    constructor(a){
        super('Circle');
        this.radius=a;
    }
    getArea(){
        return this.radius ** 2 * 3.14;
    }
}
class Trapezium extends Shape{
    constructor(a,b,c){
        super('Trapezium');
        this.upperSide=a;
        this.lowerSide=b;
        this.height=c;
    }
    getArea(){
        return this.upperSide * this.lowerSide * this.height / 2;
    }
}

const square = new Square(5);
const triangle = new Triangle(4,3);
const trapezium = new Trapezium(4,6,5);
const circle = new Circle(3);

// console.log(square.getInfo(), 'Square Area:', square.getArea()); // 출력: 25
// console.log(triangle.getInfo(), 'Triangle Area:', triangle.getArea()); // 출력: 6
// console.log(trapezium.getInfo(), 'Circle Area:', circle.getArea()); // 출력: 28.27
// console.log(circle.getInfo(), 'Trapezium Area:', trapezium.getArea()); // 출력: 25

// console.log(square);
// console.log(triangle);
// console.log(trapezium);
// console.log(circle);
// console.log(Shape.check());


// console.log(`${square.getArea()}`);
// console.log(`${triangle.getArea()}`);
// console.log(`${trapezium.getArea()}`);
// console.log(`${circle.getArea()}`);

console.log(`${square}`);
console.log(Triangle.check());
console.log(`${triangle}`);
console.log(`${trapezium}`);
console.log(`${circle}`);
