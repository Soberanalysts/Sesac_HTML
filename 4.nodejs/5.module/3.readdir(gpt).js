const fs = require('fs');
const path = require('path'); // 경로를 안전하게 처리하기 위해 path 모듈 사용
const directoryPath = '../FolderViewer';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.log("읽기 실패!!");
        return;
    } else {
        console.log("파일 목록:", files);

        files.forEach((file) => {
            const filePath = path.join(directoryPath, file); // 파일의 전체 경로 생성
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.log("파일 내용 읽기 실패", err.message);
                    return;
                }
                console.log(`파일 내용 (${file}):`, data); // 파일 내용 출력
            });
        });
    }
});