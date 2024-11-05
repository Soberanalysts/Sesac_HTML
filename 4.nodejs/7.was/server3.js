const http = require('http');
const fs = require('fs');

const readdata=fs.readFile('data.txt', (err,data) => {
    if(err){
        console.log("뭔가실패?? 파일읽기실패", err);
    }else{
        console.log("파일내용 :", data);
    }
});

// const server = 
http.createServer((req,res)=>{
    fs.readFile('./data.txt', (err,data) => {
        if(err){
            console.log(err);
            console.log(`오류발생, ${err.message}`);
            return;
        }else{
            res.writeHead(200, {'Content-Type':'text//html; charset=utf-8'});
            res.end(data);
            // console.log("파일내용 :", data);
        }
    });
    // res.writeHead(200, {'Content-Type':'text//html; charset=utf-8'});
    res.write(readdata);
    //파일로 부터 컨텐츠를 읽어와서... 그 내용을 여기에서 전달해주면 끝~
    // res.write('<H1>안녕</H1>');
    // res.write('<H1>안녕</H1>');
    // res.write('<H1>안녕</H1>');
    // res.write('<H1>안녕</H1>');
    // res.write('<H1>안녕</H1>');
    // res.end('<P>헬로우 어게인</P>');
}).listen(3000, ()=>{
    console.log('서버 대기중.. on 3000번에서 ')
});

// server.listen(5000, ()=>{
//     console.loig('서버 대기중.. on 5000번에서...');
// });


// server.on('request', (req,res)=>{
//     res.writeHead(200, {'Content-Type':'text//html; charset=utf-8'});
//     res.end('<P>헬로우 어게인</P>');
// });

// server.listen(5000, ()=>{
//     console.log('서버 대기중.. on 5000번에서 ')
// })