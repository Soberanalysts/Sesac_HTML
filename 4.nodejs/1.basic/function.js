// let sum=0;
function sum_to_100(n){
    //1부터 100까지의 합산을 반납한다.
    let sum=0;
    for(let i =0; i<=n;i++){
        sum+=i;
    }
    return sum;
}
function sum2_to_100(){
    let sum=0;
    let i=0
    while(i<=1000000){
        sum+=i;
        i++;
    }
    return sum;
}
function sum3_to_100(){
    let n=1000000;
    let sum=0;
    sum = n*(n+1)/2;
    return sum;
}

function sum_to_n(n){
    let sum=0;
    sum=n*(n+1)/2;
    return sum;
}
console.time("for");
console.log(sum_to_100(10));
console.timeEnd("for");

console.time("while");
console.log(sum2_to_100());
console.timeEnd("while");

console.time("gauss");
console.log(sum3_to_100());
console.timeEnd("gauss");

console.log(sum_to_n(5));