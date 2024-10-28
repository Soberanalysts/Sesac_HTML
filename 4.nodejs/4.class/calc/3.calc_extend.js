const { get } = require('http');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

class GenericCalculator{
    add =(a,b) => a+b;
    subtract =(a,b) => a-b;
    multiply =(a,b) => a*b;
    divide =(a,b) => a/b;

    calculator = (num1, operator, num2) =>{
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        }
    }
}
class EngineeringCalculator extends GenericCalculator{
    exponential(){

    }
    logarithm(){
        
    }
}

class StandardCalculator extends GenericCalculator{
    //제곱근, 반올림 등등
    constructor(){
        // super.Calculator = c;
        // super
    }
    sqrt(){
    }
}
class ProgrammerCalculator extends GenericCalculator{
    //비트연산, 논리연산 등등
}

class UserInput{
    constructor(calculator){
        this.calculator=calculator;
        this.readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }
    getCalculator(){
        console.log("계산기 모드를 선택해 주세요: ");
        console.log("1. 공학용 계산기");
        console.log("2. 일반 계산기");
        console.log("3. 프로그래머 계산기");
    }
    selectCalculatorMode(){
        this.readline.question("Enter the mode(1/2/3): ", (mode)=>{
            switch(mode){
                case '1':
                    this.calculator = new EngineeringCalculator();
                    this.calculator.getOperators();
                    this.operators = this.calculator.getOperators();
                    break;
                case '2':
                    this.calculator=new StandardCalculator();
                    this.operators = ['+', '-','*','/'];
                    break;
                case '3':
            }
        })
    }
        
    getUserInput = () => {
        readline.question('첫번째 숫자를 입력하시오: ', (num1) =>{
            readline.question('연산자를 입력하시오(+,-,*,/): ', (operator) =>{
                readline.question('두번째 숫자를 입력하시오: ', (num2)=>{
                    const number1 = parseFloat(num1);
                    const number2 = parseFloat(num2);
        
                    const result = calculator(number1, operator, number2);
                    console.log(`결과: ${result}`);
                    readline.close();
                })
            })
        });
    }
    start(){
    this.getUserInput();
    }
}

const calculator = new GenericCalculator();
const userInput = new UserInput(calculator);

userInput.start();

