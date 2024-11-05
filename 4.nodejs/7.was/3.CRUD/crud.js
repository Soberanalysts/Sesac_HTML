const http = require('http');
const fs = require('fs').promises;
const path = require('path');

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
    res.end('처리완료');
});

server.listen(3000, () =>{
    console.log('서버가 3000 포트에서 대기 중입니다.');
});

function handleGetRequest(req, res) {
    try {
        if (req.url === '/') {
            res.end('GET요청 / 응답완료');
        } else if (req.url === '/about') {
            res.end('GET요청 /about 응답완료');
        } else if (req.url === '/user') {
            console.log(users);
            res.end('잘 출력했다');
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
                return res.end(`application/json 이구나...${parsedData}`);
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
