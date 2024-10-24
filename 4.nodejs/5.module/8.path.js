const { dir } = require('console');
const path = require('path');

const filePath = path.join('C:/MyFolder/Sesac','file1.txt');
console.log("파일경로: ", filePath);

const extName=path.extname(filePath);
console.log("파일의 확장자: ", extName);

const dirName=path.dirname(filePath);
console.log("디렉토리명: ",dirName);

const fileName = path.basename(filePath);
console.log("파일명 : ",fileName);