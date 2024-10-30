const {Idgenerator, MyUtility, writeDataToCSV} = require('./generator1');

class ItemDataGenerator{
    constructor(){
        this.idGen = new Idgenerator();
        this.item=['Americano Coffee','Strawberry Cake','Watermelon Juice','Orange Juice', 'Espresso Coffee', 'Red Velvet Cake','Vanilla Cake'];
    }
    itemGenerator(count){
        const data = [];
        for(let i=0; i<count; i++){
            const id = this.idGen.generateId();
            const itemName= this.item[Math.floor(Math.random()*this.item.length)];
            const itemType= itemName.split(' ')[itemName.split(' ').length-1];
            const unitPrice=500*MyUtility.getRandomInRange(5,14);
            data.push([id, itemName, itemType, unitPrice]);
        }

        return data;
    }
}
const itemdata = new ItemDataGenerator();
const datas = itemdata.itemGenerator(20);
// console.log(datas);
const header = ["id", "Name",  "Type", "UnitPrice"];


writeDataToCSV(datas, "item.csv", header);
