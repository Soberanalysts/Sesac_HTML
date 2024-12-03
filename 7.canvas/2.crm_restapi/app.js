const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'revenue.html'));
});

app.get('revenue_data', (res, res) => {
    const db = new sqlite3.Database('user-sample.db', (err) => {
        if (err) {
            console.error('파일없다!');
        } else {
            console.log('DB 로딩 성공');
        }
    });

    db.all(`
        SELECT
            strftime('%Y-%m', "orders"."OrderAt") AS YearMonth,
            SUM(items.UnitPrice) AS MonthlyRevenue
        FROM
            "orders"
        JOIN
            "order_items" ON "orders"."Id" = "order_items"."OrderId"
        JOIN
            "items" ON "order_items"."ItemId" = "items"."Id"
        WHERE
            "orders"."OrderAt" >= '2023-01-01' AND "orders"."OrderAt" <= '2023-12-31'
        GROUP BY
            strftime('%Y-%m', "orders"."OrderAt")
        ORDER BY
            strftime('%Y-%m', "orders"."OrderAt")
        `, [], (err, rows) => {
            if (err) {
                console.error('쿼리 실패!!');
            } else {
                console.log(rows);
                res.render('monthly_revenue', { rows });
            }
        });
    // res.json();
})
app. listen(port, () => {
    console.log('서버 레디');
})