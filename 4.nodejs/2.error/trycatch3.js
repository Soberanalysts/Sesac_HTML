try{
    invalidFunc();
}catch(error){
    if(error instanceof TypeError){
        console.log("타입오류", error.message);
    }else if(error instanceof ReferenceError){
        console.log("참조오류", error.message)
    }else if(error instanceof RangeError){
        console.log("범위 오류", error.message);
    }else{
        console.log("기타 오류", error.message);
    }
}