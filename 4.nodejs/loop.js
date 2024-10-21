let j=0;
while(j<5){
    console.log(`while구문: ${j}`);
    j++;
}
let k=0;
do{
    console.log(`do-while구문: ${k}`);
    k++;
} while(k<5);

for(let i=0; i<10; i++){
    console.log(`for구문:${i}`);
    if(i==3){
        break;      //해당블럭 중단
    }
}
for(let i=0; i<10; i++){
    if(i==3){
        continue;      //해당블럭 중단
    }
    console.log(`for구문:${i}`);
}