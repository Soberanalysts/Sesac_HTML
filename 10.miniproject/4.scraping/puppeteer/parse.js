const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();

    const html = `
    <html>
        <head>
            <title>파싱 예제</title>
        </head>
        <body>
            <div>
                <p>첫번째 문단</p>
                <p>두번째 문단</p>
            </div>
            <a href="https://www.naver.com">네이버 링크</a>
            <p>또하나의 문단</p>
            <div class="box">박스내용</div>
        </body>
    </html>
    `
    await page.setContent(html);

    //p요소 가져오기
    const ptags = await page.evaluate(() => {
        const elements = document.querySelectorAll('p');
        // elements.forEach((text, index) => {
        //     console.log('요소: ', text);
        // })
    });

    const title = await page.title();
    console.log('페이지 제목 ', title);

    // await new Promise(resolve => setTimeout(resolve, 5000));
    await browser.close();
})


