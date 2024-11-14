const sqlite3 = require('sqlite3').verbose();

function connectToDatabase() {
    return new sqlite3.Database('mydb.db');
}

function queryName(db, searchName) {
    const selectQuery = 'SELECT * FROM employees WHERE name = ?';

    console.time('Query Time');

    db.get(selectQuery, [searchName], (err, row) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Result: ', row);
        }
        console.time('Query Time');
    });
}

function queryAll(db, searchOptions) {
    let selectQuery = 'SELECT * FROM employees WHERE 1=1';
    const queryParams = [];

    if (searchOptions.name) {
        selectQuery += ' name = ?';
        queryParams.push(searchOptions.name);
    }

    if (searchOptions.department) {
        selectQuery += ' AND department = ?';
        queryParams.push(searchOptions.department);
    }

    if (searchOptions.salary) {
        selectQuery += ' AND salary = ?';
        queryParams.push(searchOptions.salary);
    }

    console.log(selectQuery);

    db.all(selectQuery, queryParams, (err, rows) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('결과: ', rows);
        }
    })
}

module.exports = {connectToDatabase, queryName, queryAll};