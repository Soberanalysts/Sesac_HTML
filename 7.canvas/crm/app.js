const express = require('express');
const sqlite3 = require('sqlite3');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.set('view engine', 'html');

app.get('/', (req, res) => {
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

        db.close((err) => {
            if (err) {
                console.error("DB닫기 실패.. 왜?? ", err.message);
            } else {
                console.log('DB 닫기 성공');
            }
        })
})

app.listen(port, () => {
    console.log('서버 시작');
})