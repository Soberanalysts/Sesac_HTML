//라이브러리 추가
require('dotenv').config();
    const express = require('express');

const sqlite3 = require('sqlite3').verbose(); // 개발환경에서만 사용
const path = require('path');

const PORT = 3000;
const db = new sqlite3.Database(process.env.DB_PATH);
const app = express();


console.log(db);