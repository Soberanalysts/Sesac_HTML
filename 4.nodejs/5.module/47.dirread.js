const fs = require('fs');
const path = require("path");

const directoryPath = './';


function checkFile(filePath){
    fs.stat(filePath, (err,stats)=>{
        if(err){
            console.log('정보조회실패');
            return;
        }
    })
}

fs.readdir(directoryPath, (err,files) => {
    if(err){
        console.log('읽기오류');
        return;
    }
    files.forEach(file => {
        const filePath = 
        
    });
})
function checkFileSync(filePath){
    fs.statSync(filePath, (err, stats) =>{
        if(err){
            console.log('정보조회실패');
            return;
        }

        if(stats.isFile()){
            console.log(`${filePath}: 이것은 파일입니다.`);
        } else if(stats.isDirectory()){
            console.log(`${filePath}: 이것은 디렉토리입니다`);
        } else {
            console.log(`${filePath}:모르겠습니다.`);
        }
    })
}