

//1. 참조오류
try{
    console.log(undefinedVar);  

}catch(error){
    if(error instanceof ReferenceError){
        console.log("참조 오류가 발생했습니다.", error.message);
    }else{
        console.log("알수없는 에러 발생");
    }
}

//2.구문오류(syntax error) 예제
try{
    sum=eval("1++2");
    console.log(sum);
}catch(error){
    if(error instanceof SyntaxError){
        console.log("입력받은 문법에 오류가 있습니다", error.message);
    }else{
        console.log("알수없는 에러 발생", error);
    }
}

//3.타입오류(TypeError)
try{
    let obj = {};
    obj.method();
} catch(error){
    if(error instanceof TypeError){
        console.log("타입 오류가 있습니다", error.message);
    }else{
    console.log("알수 없는 오류가 발생했습니다.", error);
    }
}

//4.범위오류(RangeError)
try{
    let array = new Array(10);
} catch(error){
    if(error instanceof RangeError){
        console.log("범위 오류가 발생...", error.message)
    }else{
        console.log("알수 없는 오류가 발생했습니다.", error);
    }
}