const fs = require("fs");

const filePath = "hello.csv";

function csv_readfile() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("파일 읽는 도중 오류 발생", err.message);
      return;
    }
    console.log(data);
    console.log(typeof data);

    const rows = data.split('\n');
    console.log(rows);

  });
}
const content = [
    ['온도', '습도'],
]



function csv_writefile() {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("파일 쓰기 오류", err.message);
      return;
    }
    console.log("쓰기 완료");
  });
}
csv_writefile('hello.csv',content);