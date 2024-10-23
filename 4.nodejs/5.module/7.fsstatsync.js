const fs = require("fs");

const directoryPath = "./";

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log("디렉토리 읽기 오류");
    return;
  }
  files.forEach((file) => {
    //동기처리인데 비동기처리로 바꾸기
    try{
    const stat = fs.statSync(file);
    if (err) {
      console.log("파일 읽기 오류");
      return;
    }
    if (stat.isDirectory()) {
      console.log(`이 파일 ${file} 은 디렉토리 입니다.`);
    }
    if (stat.isFile()) {
      console.log(`이 파일 ${file} 은 파일 입니다.`);
    }
} catch(error){
    
}
  });
});
