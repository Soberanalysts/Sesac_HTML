const score = [85, 90, 78, 88, 'invalid'];
let sum = 0;

//학생 시험 점수의 합산 구하기
// for(let i=0; i<score.length;i++){
//     sum += score[i];
// }

for(let i=0; i<score.length;i++){
    try{
        if(typeof score[i] !== 'number'){
            throw new Error(`숫자가 아닌값이 입력되었습니다 : 입력된 문자열${score[i]}`);
        }
        sum +=score[i];
    }catch(error){
        console.log("에러발생");
        // if(typeof error){
            
        // }
    }
}



//평균

// const average = sum/score.length;
// console.log('합산은: ',sum);
// console.log('평균은: ',average);
// if(average >= 80){
//     console.log('합격입니다');
// }else{
//     console.log('불합격입니다.');
// }

// console.log('b'+'a'+ +'a'+'a');// baNaNa

// try{
//     console.log('b'+'a'+ +'a'+'a');// baNaNa
// }catch(error){
//     if(error typeof a){

//     }
// }