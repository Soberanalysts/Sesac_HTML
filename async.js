const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const { v4: uuidv4 } = require('uuid');

let UserId, StoreId;


class MyUtility{
    static getRandomInRange(min, max){
        return Math.floor(Math.random()*(max-min +1)) + min;
    }
}

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
    constructor(){
        this.index_user = MyUtility.getRandomInRange(1,2);
        this.user_id=[];
    }
    getUserId(filename){
        return new Promise((resolve, reject) =>{
            readCSV(filename, (err, data) => {
                if (err) {
                    console.log("파일 읽기 실패", err.message);
                    reject(err);
                }else {
                    const userIds = data.map(row => row[0]).slice(1); // CSV에서 첫 번째 열의 값만 가져옴
                    resolve(userIds[this.index_user]);
                }
            })
        });
    }
}
class Idgenerator{
    generateId(){
        const id =uuidv4();
        return id;
    }
}

class OrderDataGenerator{
    constructor(){
        this.idGen = new Idgenerator();
        this.UserId = new GetCSVData();
        this.StoreId = new GetCSVData();
    }

    async generateData(count){
        const data = [];
        for(let i=0; i<count; i++){
            const id =  this.idGen.generateId();
            const userid = await this.UserId.getUserId('user.csv');
            const storeid = await this.StoreId.getUserId('store.csv')
            data.push(id, userid,storeid);
        }
        return data;
    }
    // async generateData(){
    //     const data = [];

    //     const id =  this.idGen.generateId();
    //     const userid = await  this.UserId.getUserId();  //await으로 csv데이터 비동기 호출
    //     data.push([id, userid]);

    //     return data;
    // }
}

// const datGenerator = new OrderDataGenerator();

// const orderData = datGenerator.generateData();
// console.log('데이터 :', orderData);

// 생성된 데이터 출력
(async () => {
    const datGenerator = new OrderDataGenerator();
    const orderData = await datGenerator.generateData(1); // 호출할 때 count를 전달
    console.log('데이터:', orderData);
})();