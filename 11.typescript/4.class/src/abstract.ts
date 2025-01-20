abstract class Shape {
    abstract getArea(): number;

    printArea() {
        console.log(`넓이: ${this.getArea()}`);
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const dog = new Dog('새싹', '골든리트리버');
const circle = new Circle(10);
circle.printArea();