const Parent = require('./Parent');
const Child = require('./Child');
const Sedan = require('./Sedan');
const SUV = require('./SUV');

//부모 자녀 객체 생성
const dad = new Parent("철수", 45, "남성");
const daughter = new Child("지연", 10, "여성", "4학년");
const son = new Child("민수", 8, "남성", "2학년");

//가족 차량 생성
const familyCar = new Sedan("현대", "그랜저", "검정", 3000);

//실행
familyCar.start();
dad.getInCar(familyCar);
dad.driveCar(familyCar);
daughter.getInCar(familyCar);
son.getInCar(familyCar);
daughter.playInCar();
son.playInCar();
familyCar.stop();