class Animal {
    constructor(customBehavior) {
      this.customBehavior = customBehavior;
    }
  
    doSomething() {
      if (this.customBehavior) {
        return this.customBehavior(); // 자식이 전달한 커스텀 동작 실행
      } else {
        return '일반 동작';
      }
    }
  }
  
  class Dog extends Animal {
    constructor() {
      super(() => '강아지 전용 동작'); // 커스텀 동작 전달
    }
  }
  
  const myDog = new Dog();
  console.log(myDog.doSomething()); // 출력: "강아지 전용 동작"