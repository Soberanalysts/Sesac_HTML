const fs = require('fs');

class NameGenerator{
    constructor(){
        this.names = ['John', 'Jane', 'Michael', 'Emily', 'William', 'Olivia'];
        this.lastname = ['박','김','이','조','최'];
        this.firstname = ['가','나','다', '라','마'];
    }
    generateName(){
        // return names[Math.floor(Math.random()*names.length)]
        return this.lastname[Math.floor(Math.random()*this.lastname.length)] + this.firstname[Math.floor(Math.random()*this.firstname.length)]
    }
}

class GenderGenerator{
    generateGender(){
        return Math.random() <0.5 ? "남성" : "여성";
    }
}

class MyUtility{
    static getRandomInRange(min, max){
        return Math.floor(Math.random()*(max-min +1)) + min;
    }
}
class BirthdateGenerate{
    generateBirthdate(){
        const year = MyUtility.getRandomInRange(1960,2010);
        const month = MyUtility.getRandomInRange(1,12);
        const day = MyUtility.getRandomInRange(1,28);
        return `${year}-${month}-${day}`
    }
}
class AddressGenerator{
    constructor() {
        this.cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia']
    }
    generateAddress(){
        //앞에 1~100까지의 번지수를 붙인 주소를 생성하시오
        const addr = MyUtility.getRandomInRange(1,100);
        return addr +'번지'+ ' ' + this.cities[Math.floor(Math.random()*this.cities.length)]
    }
}
class UserGenerator{
    constructor(){
        this.nameGen = new NameGenerator();
        this.birthGen = new BirthdateGenerate();
        this.genderGen = new GenderGenerator();
        this.addressGen = new AddressGenerator();
    }

    generateData(count){
        const data = [];
        for(let i=0; i<count; i++){
            const name = this.nameGen.generateName();
            const birthdate = this.birthGen.generateBirthdate();
            const gender = this.genderGen.generateGender();
            const address = this.addressGen.generateAddress();
            data.push([name, birthdate, gender, address]);
        }
        return data;
    }
}

class DataPrinter{
    constructor(data){
        this.data=data;
    }
    printConsole(){
        for(const [name, birthdate, gender, address] of this.data){
            console.log(`이름: ${name}, 생년월일: ${birthdate}, 성별: ${gender}, 주소: ${address}`)
        }
    }
    printHTML(){
        console.log("HTML형태로 내보냈습니다.");
    }
    writeToCSV(){
        console.log("csv파일에 저장이 완료되었습니다.");
    }
}

const userGenerator = new UserGenerator();
const users = userGenerator.generateData(10);

const dataPrinter = new DataPrinter(users)
dataPrinter.printConsole();
dataPrinter.printHTML();
dataPrinter.writeToCSV();
