const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydb.db');

const numData = 1000;

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS employees (
            id INTEGER PRIMARY KEY,
            name TEXT,
            department TEXT,
            salary INTEGER
            )
        `);
});

function getRandomName() {
    const lastname = ['김','이','박','최','정'];    //성
    const firstname1 = ['가','나','다','라','마']   //중간글자
    const firstname2 = ['바','사','아','자','차']   //마지막글자

    const randomLastName = lastname[Math.floor(Math.random() * lastname.length)];
    const randomFirstName1 = lastname[Math.floor(Math.random() * lastname.length)];
    const randomFirstName2 = lastname[Math.floor(Math.random() * lastname.length)];

    return { name: randomLastName + randomFirstName1 + randomFirstName2}
}

function getRandomDept() {
    const departments = ['IT', 'HR', 'Engineering', 'Marketing'];
    return departments[Math.floor(Math.random() * departments.length)];
}

function getRandomSalary() {
    return Math.floor(Math.random() * 91) * 1000 + 10000;
}

db.serialize(() => {
    const insertStmt = db.prepare('INSERT INTO employees(name, department, salary) VALUES (?,?,?)');
    for(let i =0; i < numData; i++) {
        const { name } = getRandomName();
        const department = getRandomDept();
        const salary = getRandomSalary();

        insertStmt.run(name, department, salary, (err) => {
            if (err) {
                console.error(err.message);
            }
        })
    }
    insertStmt.finalize((err) => {
        //console.timeEnd("Execution Time"); // 
    });
    console.timeEnd("Excution Time"); //종료 시간 및 소요시간 출력
})