const http = require('http');


const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text//html; charset=utf-8'});
    //파일로 부터 컨텐츠를 읽어와서... 그 내용을 여기에서 전달해주면 끝~
    res.write('<H1>안녕</H1>');
    res.write('<H1>안녕</H1>');
    res.write('<H1>안녕</H1>');
    res.write('<H1>안녕</H1>');
    res.write('<H1>안녕</H1>');
    res.end('<P>헬로우 어게인</P>');
}).listen(5000, ()=>{
    console.log('서버 대기중.. on 5000번에서 ')
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