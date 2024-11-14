const { connectToDatabase, queryName, queryAll} = require('./queryTime');

const db = connectToDatabase();

const searchName = '정다사'; //찾을 이름

queryName(db, searchName);
