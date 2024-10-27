const fs = require('fs');

//동기화 방식으로 이 함수 끝난 다음에 다른함수 실행하도록 한다
try{
    const data=fs.readFileSync('./example.txt', 'utf8');
    console.log(data);    

}catch(error){
    console.error("파일을 읽는데 실패함", error.message);
}


const content ="이것이 파일에 쓰임";
fs.writeFile('newfile2.txt', content, 'utf8', (err) => {
    if(err){
        console.log("파일에 쓰는 중 오류가 발생했습니다.");
    }else{
        console.log('파일에 내용이 성공적으로 쓰였습니다.');
    }
});
