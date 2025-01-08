const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();

    await page.goto('https://www.naver.com/');

    const title = await page.title();
    console.log('페이지 제목 ', title);

    // await new Promise(resolve => setTimeout(resolve, 5000));
    await browser.close();
})