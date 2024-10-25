//과거 언어는 모든 예외처리를 if else로 했음
//모던언어: JAVA이후의 언어(JS, PYTHON, GOLANG등등)

// try{

// } catch{

// }
// const undefinedVariable=10;
try{
    const result=undefinedVariable*2;
    console.log(result);
    //오류 발생하면 바로 catch로 넘어간다
    console.log("여기는 다른코드1");
}catch(error){
    console.error("오류발생",error.message);
}
console.log("다른코드");

