const fs = require('fs');
const {Idgenerator, MyUtility, writeDataToCSV} = require('./generator1');
const GetCSVData = require('./generator3');



class OrderitemDataGenerator{
    constructor(){
        this.idGen = new Idgenerator();
        this.orderId = new GetCSVData();
        this.itemId = new GetCSVData();
    }

    async generateData(count){
        const data = [];
        const order_data = await this.orderId.getIdfromCSV('order.csv');
        const item_data = await this.itemId.getIdfromCSV('item.csv');
        // console.log('orderdata출력 : ', order_data);
        for(let i=0; i<count; i++){
            const id = this.idGen.generateId();
            const order_id =order_data[MyUtility.getRandomInRange(1,10000)];
            const item_id =item_data[MyUtility.getRandomInRange(1,20)];
            data.push([id, order_id, item_id]);
        }
        return data;
    }
}



const header = ["id", "OrderId", "ItemId"];
(async () =>{
    const itemOrderdatGenerator = new OrderitemDataGenerator();
    const itemorderData = await itemOrderdatGenerator.generateData(50000);
    // console.log(orderData);
    writeDataToCSV(itemorderData, "orderitem.csv",header);
})();