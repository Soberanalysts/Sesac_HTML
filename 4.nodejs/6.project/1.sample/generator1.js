const fs = require('fs');

const names = ['John', 'Jane', 'Michael', 'Emily', 'William', 'Olivia'];
const lastname = ['박','김','이','조','최'];
const firstname = ['가','나','다', '라','마'];
const cities = ['New York', 'Los Angeles', 'Chicage', 'Houston', 'Philadelpia'];


function generateName(){
    // return names[Math.floor(Math.random()*names.length)]
    return lastname[Math.floor(Math.random()*lastname.length)] + firstname[Math.floor(Math.random()*firstname.length)]
}

// for (let i =0; i<10;i++){
//     console.log(generateName());
// }

function generateGender(){
    return Math.random() <0.5 ? "남성" : "여성";
}

// for(let i =0; i<10; i++){
//     console.log(generateName(), generateGender());
// }
function getRandomInRange(min, max){
    return Math.floor(Math.random()*(max-min +1)) + min;
}
function generateBirthdate(){
    // const year = Math.floor(Math.random()*(2010-1960 +1))+1960;
    // const month = Math.floor(Math.random()*12)+1;
    // const day = Math.floor(Math.random()*28)+1;
    const year = getRandomInRange(1960,2010);
    const month = getRandomInRange(1,12);
    const day = getRandomInRange(1,28);
    return `${year}-${month}-${day}`
}


function generateYYYY(){
    // while(true){
    //     const year = Math.floor(Math.random()*10000);
    //     if(year >=1960 && year <=2010){
    //     break;
    //     }
    // }
    const year = Math.floor(Math.random()*(2010-1960 +1))+1960;

    return year;
}
function generateAddress(){
    //앞에 1~100까지의 번지수를 붙인 주소를 생성하시오
    const addr = getRandomInRange(1,100);
    return addr +'번지'+ ' ' + cities[Math.floor(Math.random()*cities.length)]
}
for(let i=0;i<10;i++){
    console.log(generateName(), generateGender(), generateBirthdate(), generateAddress());
}
for(let i=0;i<10;i++){
    // console.log(generateBirthdate());
    // console.log(generateAddress());
}

const userdb =[];

for(let i=0; i<100 ; i++){
    userdb.push([generateName(), generateGender(), generateBirthdate(), generateAddress()])
}
//db에 있는 내용
// for(const user of userdb){
//     console.log(user);
// }
// console.log(userdb);

function writeDataToCSV(data, filePath){
    const header = ["Name", "Birthdate", "Gender", "Address"];
    const rows = data.map(row => row.join(","));
    const csvContent = [header, ...rows].join('\n');

    fs.writeFileSync(filePath, csvContent, 'utf8');
}

writeDataToCSV(userdb, "user.csv");


class NameGenerator{

}

class User{

}
