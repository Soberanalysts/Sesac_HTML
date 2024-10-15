let person ={
    name:'John',
    age: 25,
    address: "서울시 강남구 \"100-2\"번지",
    greet: function(){
        console.log("안녕하세요, " + this.name + "입니다.")
    }
}

console.log(person);

console.log("사람의 이름은 : ", person.name);
console.log("사람의 나이는 : ", person.age);
console.log("사람의 주소는 : ", person.address);
person.greet();
person.name="Tom";
person.greet();