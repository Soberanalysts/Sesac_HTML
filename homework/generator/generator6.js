const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('temp.db');

db.run(`CREATE TABLE IF NOT EXISTS datas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT   
)`);

// inputDB = async () => {
//     const title = await this.title.getIdfromCSV('temp.csv',1);
//     const content = await this.content.getIdfromCSV('temp.csv',2);
//     const statement = db.prepare(`INSERT into datas (title, content) values (?, ?)`);
//     statement.run([title, content]);
//     console.log(`title: ${title}, content : ${content}`);
// }

function readCSV(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        const rows = data.split('\n');
        const result = rows.map((row) => row.split(','));
        callback(null, result);
    });
}

class GetCSVData{
    getIdfromCSV(filename, index) {
        return new Promise((resolve, reject)=>{
            readCSV(filename, (err, data) => {
                if (err) {
                    console.log("파일 읽기 실패", err.message);
                    reject(err);
                }else {
                    const csvId = data.map(row => row[index]); // CSV에서 첫 번째 열의 값만 가져옴
                    resolve(csvId);
                }
            })
        })
    }
}

class InputDB{
    constructor () {
        this.id=new GetCSVData();
        this.title=new GetCSVData();
        this.content=new GetCSVData();
    }
    async inputData(count){
    const data = [];
    const title = await this.title.getIdfromCSV('temp.csv',1);
    const content = await this.content.getIdfromCSV('temp.csv',2);
    const statement = db.prepare(`INSERT into datas (title, content) values (?, ?)`);
    statement.run([title, content]);
    console.log(`title: ${title}, content : ${content}`);
    }
}

class MyUtility{
    static getRandomInRange(min, max){
        return Math.floor(Math.random()*(max-min +1)) + min;
    }
}

// class Idgenerator{
//     generateId(){
//         const id = uuidv4();
//         return id;
//     }
// }

class NameGenerator{
    constructor(){
        this.lastname = ['강','김','이','조','최','장', '박'];
        this.firstname = ['준영','승현','하은', '은지','예진','지현', '지훈'];
    }
    generateName(){
        return this.lastname[Math.floor(Math.random()*this.lastname.length)] + this.firstname[Math.floor(Math.random()*this.firstname.length)]
    }
}

class GenderGenerator{
    generateGender(){
        return Math.random() < 0.5 ? "Male" : "Female";
    }
}
class ageGenerator{
    generateage(){
        const age = MyUtility.getRandomInRange(10,70);
        return age;
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
        this.cities = ['서울', '대전', '대구', '부산', '광주', '울산', '인천']
        this.gu=['강남','강서','강동','강북','중','서','남','동','북'];
    }
    generateAddress(){
        //앞에 1~100까지의 번지수를 붙인 주소를 생성하시오
        const addr = MyUtility.getRandomInRange(1,100);
        const road = MyUtility.getRandomInRange(1,100);
        const suf_road = Math.random() <0.5 ? "길" : "로";
        return this.cities[Math.floor(Math.random()*this.cities.length)]+' ' +this.gu[Math.floor(Math.random()*this.gu.length)]+'구'+' '+ road +suf_road+ ' ' + addr 
    }
}
class UserGenerator{
    constructor(){
        // this.idGen = new Idgenerator();
        this.nameGen = new NameGenerator();
        this.genderGen = new GenderGenerator();
        this.ageGen = new ageGenerator();
        this.birthGen = new BirthdateGenerate();
        this.addressGen = new AddressGenerator();
    }

    generateData(count){
        const data = [];
        for (let i = 0; i < count; i++) {
            const id = i;
            // const name = this.nameGen.generateName();
            // const gender = this.genderGen.generateGender();
            // const age = this.ageGen.generateage();
            // const birthdate = this.birthGen.generateBirthdate();
            // const address = this.addressGen.generateAddress();
            const title = this.nameGen.generateName();
            const content = this.address = this.addressGen.generateAddress();
            data.push([id, title, content]);
        }
        return data;
    }
}
const userGenerator = new UserGenerator();
const users = userGenerator.generateData(100);

// console.log(users);

const header = ["id", "title", "content"];

function writeDataToCSV(data, filePath, header){
    const rows = data.map(row => row.join(","));
    const csvContent = [header, ...rows].join('\n');
    fs.writeFileSync(filePath, csvContent, 'utf8');
}

writeDataToCSV(users, "temp.csv", header);
const database = new InputDB();
database.inputData(1);
// inputDB();
// module.exports = {Idgenerator, MyUtility, writeDataToCSV};