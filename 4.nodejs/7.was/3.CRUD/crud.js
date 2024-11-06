const http = require('http');
const fs = require('fs').promises;
const path = require('path');
// const parse = require('querystring');

const users = {};

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    if (req.method === 'GET') {
        handleGetRequest(req, res);
    } else if (req.method === 'POST') {
        handlePostRequest(req, res);
    } else if (req.method === 'PUT') {
        handlePutRequest(req, res);
    } else if (req.method === 'DELETE') {
        handleDeleteRequest(req, res);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
    // res.end('처리완료');
});

server.listen(3000, () =>{
    console.log('서버가 3000 포트에서 대기 중입니다.');
});

async function handleGetRequest(req, res) {
    try {
        if (req.url === '/') {
            const data = await fs.readFile('./index.html');
            res.end(data);
        } else if (req.url === '/about') {

            // const filePath = path.join(__dirname, req.url);
            // const fileExt = path.extname(filePath);

            // let contentType = 'text.plain';
            // if(fileExt == '.jpeg' || fileExt === '.jpg') {
            //     contentType = 'image/jpeg';
            // } else if (fileExt === '.png') {
            //     contentType = 'image/png';
            // }
            const data = await fs.readFile('./about.html');
            res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
            res.write('<H1>안녕</H1>');
            res.end(`GET요청 /about 응답완료 ${data}`);
        } else if (req.url === '/user') {
            // console.log(users);
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
            res.end(JSON.stringify(users));
        } else if (req.url.startsWith('/static')) {
            const filePath = path.join(__dirname ,req.url);
            console.log(filePath);
            const data = await fs.readFile(filePath);
            res.writeHead(200, {'Content-Type':'application/javascript; charset=utf-8'})

            res.end("파일 곧 전송됨....");
        } else {
            res.writeHead(404);
            res.end('Not Found');
        }
    } catch(err) {
        console.error(err);
        res.writeHead(500);
        res.end('알수 없는 오류');
    }
    
}

function handlePostRequest(req, res) {
    // if (req.url === '/') {
    //     res.end('POST요청 / 응답완료');
    // } else if (req.url === '/about') {
    //     res.end('POST요청 /about 응답완료');
    // } else {
    //     res.writeHead(404);
    //     res.end('Not Found');
    // }
    if (req.url === '/user') {
        let body = '';
        req.on('data', (data) => (body += data));

        req.on('end', () => {
            if (req.headers['content-type'] === 'text/plain') {
                return res.end('plaintext 로 데이터를 줬구나...')
            } else if (req.headers['content-type'] === 'application/json') {
                const parsedData = JSON.parse(body);
                const username = parsedData.name;
                users[username] = username;
                // return res.end(`application/json 이구나...${parsedData}`);
                return res.end(`application/json 이구나...body: ${body} json: ${parsedData}`);
                // return res.end(`application/json 이구나...`);
            } else if (req.headers) {req.headers['content-type'] === 'app'
            } else {
                res.writeHead(404);
                return res.end('모르는 타입임')
            }
        })
    }
    // res.end('POST요청 응답완료');
}

function handlePutRequest(req, res) {
    if (req.url === '/') {
        res.end('PUT요청 / 응답완료');
    } else if (req.url === '/about') {
        res.end('PUT요청 /about 응답완료');
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
}


function handleDeleteRequest(req, res) {
    
}
