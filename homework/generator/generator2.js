const {Idgenerator, MyUtility, writeDataToCSV} = require('./generator1');


class StoreGenerator{
    constructor(){
        this.store = ['스타벅스', '투썸','이디야','커피빈','빽다방'];
        this.neiborhoood = ['홍대','송파','잠실','신촌','강서'];
        this.no_store=MyUtility.getRandomInRange(1,10);
    }
    generateStore(){
        return this.store[Math.floor(Math.random()*this.store.length)]+' '+this.neiborhoood[Math.floor(Math.random()*this.neiborhoood.length)]+this.no_store+'호점';
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
class DataGenerator{
    constructor(){
        this.idGen = new Idgenerator();
        this.storeGen = new StoreGenerator();
        this.addressGen = new AddressGenerator();
    }
    generateData(count){
        const data = [];
        for(let i=0; i<count; i++){
            const id = this.idGen.generateId();
            const store = this.storeGen.generateStore();
            const address = this.addressGen.generateAddress();
            data.push([id, store, store.split(' ')[0], address]);
        }
        return data;
    }
}

const datGenerator = new DataGenerator();
const datas = datGenerator.generateData(100);
console.log(datas);

const header = ["id", "Name",  "Type", "Address"];


writeDataToCSV(datas, "store.csv",header);
