const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

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
readCSV('user.csv','utf8');

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


class OrderTimeGenerator{
    constructor(){
        this.month=MyUtility.getRandomInRange(1,12);
        this.date = MyUtility.getRandomInRange(1,28);
    }
    getOrderTime(){
        return '2024'+'-'+this.month+'-'+this.date;
    }
}

class OrderDataGenerator{
    constructor(){
        this.idGen = new Idgenerator();
        this.ordertimeGen = new OrderTimeGenerator();
        this.StoreId = new AddressGenerator();
        this.UserId = ;
    }

    generateData(count){
        const data = [];
        for(let i=0; i<count; i++){
            const id = this.idGen.generateId();
            const orderAt = this.ordertimeGen.getOrderTime();
            const storeid = ;
            const userid = ;

            data.push([id, orderAt, storeid, userid]);
        }
        return data;
    }
}








function writeDataToCSV(data, filePath){
    const header = ["id", "OrderAt",  "StoreId", "UserId"];
    const rows = data.map(row => row.join(","));
    const csvContent = [header, ...rows].join('\n');
    fs.writeFileSync(filePath, csvContent, 'utf8');
}

writeDataToCSV([], "order.csv");
