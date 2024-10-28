const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// const calculator = (num1, operator, num2) =>{
//     return 0;
// }
add =(a,b) => a+b;
subtract =(a,b) => a-b;
multiply =(a,b) => a*b;
divide =(a,b) => a/b;

const calculator = (num1, operator, num2) =>{
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

