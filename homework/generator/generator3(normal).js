const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let UserId, StoreId;


class MyUtility{
    static getRandomInRange(min, max){
        return Math.floor(Math.random()*(max-min +1)) + min;
    }
}


let variable = MyUtility.getRandomInRange(1,100);

function readCSV(filePath, a, callback) {
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
// readCSV('user.csv', variable, (err, data) => {
//     if (err) {
//         console.log("파일 읽기 실패", err.message);
//     }
//     console.log("파일 내의 결과는: ", data[variable][0]);
//     return data[variable][0];
// });
// readCSV('user.csv','utf8');

class GetCSVData{
    constructor(){
        this.index_user = MyUtility.getRandomInRange(1,1000);
        this.index_store = MyUtility.getRandomInRange(1,100);
    }
    // getUserId(){
    //     const userid = readCSV('user.csv', this.index_user, (err, data) => {
    //         if (err) {
    //             console.log("파일 읽기 실패", err.message);
    //         }
    //         console.log("파일 내의 결과는: ", data[this.index_user][0]);
    //         return data[this.index_user][0];
    //     });
    //     return userid;
    // }
    // getStoreId(){
    //     const storeid = readCSV('store.csv', this.index_store, (err, data) => {
    //         if (err) {
    //             console.log("파일 읽기 실패", err.message);
    //         }
    //         console.log("파일 내의 결과는: ", data[this.index_store][0]);
    //         return data[this.index_store][0];
    //     });
    //     return storeid;
    // }
    // async getUserId() {
    //     try {
    //         const data = await readCSV('user.csv', this.index_user); // 비동기 실행 대기
    //         console.log("파일 내의 결과는: ", data[this.index_user][0]);
    //         return data[this.index_user][0];
    //     } catch (err) {
    //         console.log("파일 읽기 실패", err.message);
    //     }
    // }

    // async getStoreId() {
    //     try {
    //         const data = await readCSV('store.csv', this.index_store); // 비동기 실행 대기
    //         console.log("파일 내의 결과는: ", data[this.index_store][0]);
    //         return data[this.index_store][0];
    //     } catch (err) {
    //         console.log("파일 읽기 실패", err.message);
    //     }
    // }
    getStoreId(callback) {
        readCSV('store.csv', this.index_store, (err, data) => {
            if (err) {
                console.log("파일 읽기 실패", err.message);
                return;
            }
            const storeid = data[this.index_store][0];
            console.log("파일 내의 결과는: ", storeid);
            callback(storeid);
        });
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
        this.time = MyUtility.getRandomInRange(1,24)+':'+MyUtility.getRandomInRange(0,59)+':'+MyUtility.getRandomInRange(0,59);
    }
    getOrderTime(){
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

    generateData(count){
        const data = [];
        for(let i=0; i<count; i++){
            const id = this.idGen.generateId();
            const orderAt = this.ordertimeGen.getOrderTime();
            const storeid = this.StoreId.getStoreId(storeid => console.log("Store ID:", storeid));
            const userid = null;
            // console.log(storeid);
            data.push([id, orderAt, storeid, userid]);
        }
        return data;
    }
}

const datGenerator = new OrderDataGenerator();

const orderData = datGenerator.generateData(1);
console.log(orderData);





function writeDataToCSV(data, filePath){
    const header = ["id", "OrderAt",  "StoreId", "UserId"];
    const rows = data.map(row => row.join(","));
    const csvContent = [header, ...rows].join('\n');
    fs.writeFileSync(filePath, csvContent, 'utf8');
}

writeDataToCSV([], "order.csv");
