const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// const parse = require('querystring').parse;

//디스트럭쳐링
const {parse} = require('querystring');

const userData = {};

const server = http.createServer(async (req,res) =>{
    //사용자가 /를 요청시 index.html전달
    // /about요청시 about.html전달
    // 그외 : 없다고 반납(404 Not Found)
    //req.url 을 비교
    console.log(req.method, req.url);
    // let body = '';
    try {
        if(req.method === 'GET'){
            if (req.url ==='/'){
                const data = await fs.readFile('./index.html');
                res.writeHead(200, {'Content_Type':'text/html; charset=utf-8'});
                res.end(data);
            } else if (req.url === '/about') {
                const data = await fs.readFile('./about.html');
                res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
                res.end(data);
            } else if (req.url === '/user') {
                res.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});
                // const data = await 
                res.end(JSON.stringify(userData));
                req.on('end', () => {
                    console.log(`데이터가 받아진 후: ${userData}`);
                })
            } else if (req.url.startsWith('/image/')){
                console.log(`이미지 파일명 추출은?? ${req.url}`);
                // console.log(`파일명 : ${req.url.split('/image/')[0]}, ${req.url.split('/image/')[1]}`)
                const imageName = path.basename(req.url);
                const imagePath = path.join('static', imageName);
                // console.log(`이미지 파일명: ${imageName}`);
                console.log(`이미지 경로: ${imagePath}`);
                const imageData = await fs.readFile(imagePath);
                res.writeHead(200, {'Content-Type':'image/jpg'});
                
                res.end(imageData);
                // 1.url 뒤에 있는 글자를 짤라서,
                // 2. 파일명을 가져와서...
                // 3. 우리의 이미지 디렉토리인 static/ 뒤에 위 파일명을 붙여서
                // 4. 그 내용을 전달한다
            } else {
                res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
                res.end('Not Found');
            }
        } else if (req.method === 'POST') {
            if (req.url === '/user') {
                let body = '';
                req.on('data', (data) => {
                    body += data;
                        console.log(`추가한 데이터: ${data}`);
                    })
                req.on('end', () => {
                    console.log(`데이터가 받아진 후: ${body}`);
                    // userData.name = username;
                    const formData = parse(body);
                    console.log('받은데이터는??', formData);
                    const username = formData.name;
                    console.log('그래서 유저네임은??', userData);
                    userData[username]=username;
                    res.writeHead(200, {'Content-Type':'text/html; charset-utf-8'});
                    res.end('등록 완료');
                })
            } else {
                res.writeHead(404, {'Content-Type':'text/html; charset-utf-8'});
                res.end('Not Found');
            }
        } else if (req.method === 'DELETE') {
            if (req.url === '/user') {
                // let deleteData = {};
                let body = ''; // 데이터를 수신할 변수
        
                req.on('data', (data) => {
                    body += data; // 데이터 누적
                });

                req.on('data', () => {
                    const deleteData = parse(body);
                    const keyToDelete = deleteData.name; // 삭제할 키 (name=aaa 형태일 때 "aaa" 가져옴)
                    console.log(deleteData);
                    console.log(keyToDelete);
                    if (keyToDelete in userData) {
                        delete userData[keyToDelete];
                        console.log(`Deleted data: ${keyToDelete}`);
                    }  else {
                        console.log(`No data found for key: ${keyToDelete}`);
                    }
                    // userData.filter((key) => key === deleteData);
                    // delete userData.deleteData;
                    // userData -= data;
                    console.log(userData);
                        // console.log(`삭제하려는 데이터: ${data}`);
                    })
                req.on('end', () => {
                    res.end('삭제 완료');
                })
            } else {
                res.writeHead(404, {'Content-Type':'text/html; charset-utf-8'});
                res.end('Not Found');
            }
        } else {
            //GET도 아니고 POST도 아니면 없다
            res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
            res.end('Not Found');
        }
        // const data = await fs.readFile('./index.html');
        // res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        // res.end(data);
    } catch (err){
        console.error(err);
        res.writeHead(500, {'Content-Type':'text/html; charset=utf-8'});
        res.end('알수 없는 오류... 관리자 문의...');
    }
});

server.listen(3000, () =>{
    console.log('서버 대기중.. on 3000번에서...');
})