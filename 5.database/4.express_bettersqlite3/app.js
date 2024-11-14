const express = require('express');
const sqlite3 = require('better-sqlite3');
const fs = require('fs');

const app = express();
const port = 3000;
const dbFile = 'mydb.db';


const db = sqlite3(dbFile);

const allowedTables = ['users','products','books'];

app.use(express.urlencoded( { extende: true }));
app.use(express.json());

function initilizeDatabase() {
    const sql = fs.readFileSync('init_database.sql','utf-8');
    const statements = sql.split(';');
    // console.log(statements);
    try {
        db.transaction(() => {
            for (const statement of statements) {
                db.exec(statement);
            }
        })();
        console.log('초기화 성공!!');
    } catch (err) {
        console.error('초기화 오류!!');
    }

}

initilizeDatabase();

app.get('/products', (req, res) => {
    const {name} =req.query;

    console.log(name);

    if (name) {
        const query = db.prepare('SELECT - FROM products WHERE name LIKE ?');
        const rows = query.all(`${name}`);
        console.log(rows);

        res.json(rows);
    } else {
        const query = db.prepare('SELECT * FROM products');
        const rows = query.all();
        res.json(rows);
    }
});

app.get('/products_weak', (req, res) => {
    const { name } = req.query;

    console.log(name);
    const queryStr = `SELECT * FROM products WHERE name LIKE '%${name}%`;
    const query = db.prepare(queryStr);
    const rows = query.all();
    res.json(rows);
});


//한개 반납
app.get('/users/:id', (req, res) => {
    //여러개 반납
    const query = `SELECT * FROM ${db_table}`;
    
    const userId = req.params.id;

    db.get(query, (err, row) => {
        if(err) {   
            return res.send('DB조회 오류');
        }
        if(!row) {
            return res.status(404).send(`Invalid ID: ${id}`);
        }
        res.json(row);
    })

});

//여러개 반납
app.get('/users', (req, res) => {
    // const db_table = req.params.table;

    // const query = `SELECT * FROM ${db_table} WHERE id = ?`;
    
    const userId =  req.params.id;
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
    
    res.json(user);
    // db.get(query, (err, rows) => {
    //     if(err) {   
    //         return res.send('DB조회 오류');
    //     }
    //     if(!rows) {
    //         return res.status(404).send(`Invalid ID: ${id}`);
    //     }
    //     res.json(rows);
    // })

});

app.post('/users', (req, res) => {
    const {username, password} = req.body;
    const insert = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)').run(username);
    res.send(`사용자 추가 완료: ${insert.lastInsertRowid}`);

    db.run(`INSERT INTO users CONCAT(username, password)`);
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const {username, password } = req.body;

    db.prepare('UPDATE users SET username=?, password=? WHERE id=?').run(username, password, user)
    // 동적으로 이렇게 오는 입력값을 아래의 쿼리문으로 잘 만들려면 어떻게 해야할까??
    
    db.run('UPDATE users SET username = ?, password = ? WHERE id = ?', [username, password, userId], (err) => {
        if(err) {
            console.error(err.message);
            return res.status(500).send('내부 오류');
        }
        res.send(`사용자(${userId}) 정보 업데이트 완료`);
    });

    if(username !== undefined) {
        fields.push("username = ?");
        values.push(username);
    }
    if(password !== undefined) {
        fields.push("password = ?");
        values.push(password);
    }
    if(fields.length === 0) {
        return res.status(400).send("변경할 필요 없이");
    }

    values.push(userId);

    console.log(fields.join(", "), values);

    db.run(`UPDATE users SET ${fileds.join(", ")}`, function (err){
        if (err) {
            console.error(err.message);
            return res.status(500).send('내부 오류');
        }
        res.send(`사용자(${userId}) 정보 업데이트 완료`);
    })
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    db.run('DELETE FROM users WHERE id = ?', [userId], function(err) {
        if (err) {
            console.error(err.message);
            return res.status(500).send('내부 오류');
        }
        res.send(`사용자(${userId}) 정보 업데이트 완료`);
    })
});

app.get('/:table', (req, res) => {
    const db_table = req.params.table;

    try {
        const query = db.prepare(`SELECT * FROM ${db_table}`);
        const rows = query.all();
        res.json(rows);
    } catch (err) {
        res.send(`테이블이 없다: ${db_table}`);
    }
});

app.listen(port, () => {
    console.log('서버 레디');
});