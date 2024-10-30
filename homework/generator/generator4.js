const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

class MyUtility{
    static getRandomInRange(min, max){
        return Math.floor(Math.random()*(max-min +1)) + min;
    }
}

class Idgenerator{
    generateId(){
        const id =uuidv4();
        return id;
    }
}



function writeDataToCSV(data, filePath){
    const header = ["id", "Name",  "Type", "UnitPrice"];
    const rows = data.map(row => row.join(","));
    const csvContent = [header, ...rows].join('\n');
    fs.writeFileSync(filePath, csvContent, 'utf8');
}

writeDataToCSV([], "item.csv");
