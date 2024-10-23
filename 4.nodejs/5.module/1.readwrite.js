const fs = require('fs');

//파일 읽기
fs.readFile('./example.txt',(err,data)=>{
    if(err){
        console.log("뭔가실패?? 파일읽기실패", err);
    }else{
        console.log("파일내용 :", data);
    }
});


// fs.readFileSync('./example.txt');


const content ="이것이 파일에 쓰임";
fs.writeFile('newfile.txt', content, 'utf8', (err) => {
    if(err){
        console.log("파일에 쓰는 중 오류가 발생했습니다.");
    }else{
        console.log('파일에 내용이 성공적으로 쓰였습니다.');
    }
});
