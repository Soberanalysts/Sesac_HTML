function Triangle(n) {
    for (let j = 0; j < n; j++) {
      let star = "";
      for (let i = 1; i <= 2 * n - 1; i++) {
        if (i <= n + j && i >= n - j) {
          star += "*";
        } else {
          star += " ";
        }
        // process.stdout.write(star);
      }
      process.stdout.write(' ');
      process.stdout.write(star);
      process.stdout.write(' ');
      console.log(star);
    }
}
function InverseTriangle(n) {
    for (let j = 0; j < n; j++) {
      let star = "";
      for (let i = 0; i <= 4 * n; i++) {
        if (i < 2*(j+1) || i > 4*n-2*(j+1)) {
          star += " ";
        } else {
          star += "*";
        }
      }
    // for(let k=1;k<n;k++){
    //     process.stdout.write(' ');
    // }
      console.log(star);
    }
  }
  function middleline(n){
    let star = "";
    for(let i=0; i<4*n+1;i++){
        star += "*";
    }
    console.log(star);
}

// Triangle(3);
// middleline(3);
// InverseTriangle(3);

// Triangle(5);
// InverseTriangle(5);





function heart(n){
    Triangle(n);
    middleline(n);
    InverseTriangle(n);
}
heart(5);