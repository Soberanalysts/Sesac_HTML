const fs = require('fs');
const {Idgenerator, MyUtility, writeDataToCSV} = require('./generator1');


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
    getIdfromCSV(filename){
        return new Promise((resolve, reject)=>{
            readCSV(filename, (err, data) => {
                if (err) {
                    console.log("파일 읽기 실패", err.message);
                    reject(err);
                }else {
                    const csvId = data.map(row => row[0]); // CSV에서 첫 번째 열의 값만 가져옴
                    resolve(csvId);
                }
            })
        })
    }
}

class OrderTimeGenerator{
    constructor(){
        this.month=0;
        this.date = 0;
        this.time = 0;
    }
    getOrderTime(){
        this.month = MyUtility.getRandomInRange(1,12);
        this.date = MyUtility.getRandomInRange(1,28);
        this.time = MyUtility.getRandomInRange(1,24)+':'+MyUtility.getRandomInRange(0,59)+':'+MyUtility.getRandomInRange(0,59);
        return '2024'+'-'+this.month+'-'+this.date + ' ' + this.time;
    }
}

class OrderDataGenerator{
    constructor(){
        this.idGen = new Idgenerator();
        this.ordertimeGen = new OrderTimeGenerator();
        this.StoreId = new GetCSVData();
        this.UserId = new GetCSVData();
    }

    async generateData(count){
        const data = [];
        const store_data = await this.StoreId.getIdfromCSV('store.csv');
        const id_data = await this.UserId.getIdfromCSV('user.csv');
        // console.log('storedata출력 : ', store_data);
        for(let i=0; i<count; i++){
            const id = this.idGen.generateId();
            const orderAt = this.ordertimeGen.getOrderTime();
            const storeid =store_data[MyUtility.getRandomInRange(1,100)];
            const userid =id_data[MyUtility.getRandomInRange(1,1000)];
            data.push([id, orderAt, storeid, userid]);
        }
        return data;
    }
}
const header = ["id", "OrderAt",  "StoreId", "UserId"];

(async () =>{
    const datGenerator = new OrderDataGenerator();
    const orderData = await datGenerator.generateData(10000);
    // console.log(orderData);
    writeDataToCSV(orderData, "order.csv",header);
})();


module.exports = GetCSVData;