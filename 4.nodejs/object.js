let car = {
    brand: "현대",
    year: 2004,
    start: function () {
        return "엔진 시작";
    },
    stop: function(){
        return "엔진 중지";
    }
}

console.log(car);
console.log(car.brand);
console.log(car.year);
console.log(car.start); //변수를 호출
console.log(car.start()); //변수에 담긴 함수를 호출
console.log(car.stop); //함수를 담고있는 변수를 출력
console.log(car.stop()); //변수를 담고있는 함수를 출력

car.name="KS";
console.log(car);