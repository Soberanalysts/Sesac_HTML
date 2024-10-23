
const person1=new Person("철수", 25, "남성");
person1.greet() ; 
person1.walk() ; 
person1.eat() ; 


const employee1 = new Employee("영희",30,"여성","매니저",50000);
employee1.greet();
employee1.displayInfo();
employee1.walk();
employee1.work();

console.log("직원1이 직원객체인가요?", employee1 instanceof Employee);
console.log("직원1이 사람인가요?", employee1 instanceof Person);

console.log("사람1은 직원인가요?", person1 instanceof Employee);
console.log("사람1은 사람인가요?", person1 instanceof Person);

console.log("직원1 이라는 변수는??",typeof employee1);
console.log("사람1 이라는 변수는??",typeof person1);

class Manager extends Employee{
    constructor(name, age, gender, jobTitle, salary, team){
        super(name, age, gender, jobTitle, salary);
        this.team = team;
    }
    assignTask(){
        console.log(`${this.name}매니저가 ${this.team} 에 업무를 배분하고 있습니다.`);
    }
}

const manager1 = new Manager("수현", 35, "남성", "팀장", 60000, "개발");
manager1.assignTask();

// const person1 = new Person("철수", 25, "남성");
// person1.greet("길동");
// try{
//     person1.walk(10);
// }catch(error){
//     console.error("입력값에 오류가 있음", error.message);
// }
// person1.eat();

class Custormer extends Person{
    constructor(name, age, gender, customerID, orderHistory){
        super(name, age, gender);
        this.customerID=customerID;
        this.orderHistory=orderHistory;
    }
    placeOrder(product){
        console.log(`${this.name}고객이 ${product}를 주문하였습니다.`);
    }
    PrintorderHistory(){
        console.log("주문목록: "+ this.orderHistory);
        for(let i=0; i<this.orderHistory.length;i++){
            console.log(" - " + this.orderHistory[i]);
        }
        this.orderHistory.forEach((orderItem)=>{
            console.log(`<li>${orderItem}</li>`)
        });
        console.log(`주문 내역: ${this.orderHistory.join('<BR>')}`)
    }
}
const student1 = new Student("지연", 20, "여성","20240101", "컴퓨터공학");
student1.study();

const customer1 = new Custormer("지민", 22, "여성", "C1001",["커피", "라뗴"]);
customer1.placeOrder("생크림케익");
console.log(customer1.orderHistory);
customer1.PrintorderHistory();

console.log('-----------');
console.log('-'.repeat(20));

const employee2 = new Employee("지수",25,"여성","디자이너",50000);


const people = [manager1, student1, customer1, employee1, employee2]
introduce(people);

function introduce(people){
    // 
    for(const person of people){
        person.greet("철수");
    }
    for(let i=0; i<people.length;i++){
        people[i].walk(Math.floor(Math.random()*10+1));
    }
    people.forEach((person) =>{
        if(person instanceof Employee){
            person.work();
        }else if(person instanceof Student){
            person.study();
        }
    })
}