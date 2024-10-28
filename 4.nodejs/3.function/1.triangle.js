function leftTriangle(n) {
  // let arr = Array.from({length:n},()=>'');
  // for(let j=0; j<n;j++){
  //     for(let i=0; i<=j;i++){
  //        arr[i]='*';
  //     }
  //     // console.log('\n');
  //     console.log(arr);
  // }
  let star = " ";
  for (let i = 0; i < n; i++) {
    star += "*";
    console.log(star);
  }
}

function leftInverseTriangle(n) {
  // for(let i=0; i<n;i++){
  //        star += '*';
  // }
  // for(let j=n;j>0;j--){
  //     star -='*';
  //     console.log(star);
  // }

  for (let j = n; j > 0; j--) {
    let star = " ";
    for (let i = 0; i < j; i++) {
      star += "*";
    }
    console.log(star);
  }
}

function rightTriangle(n) {
  for (let j = n; j > 0; j--) {
    let star = "";
    for (let i = 1; i <= n; i++) {
      if (i >= j) {
        star += "*";
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
}
function rightInverseTriangle(n) {
  for (let j = 0; j < n; j++) {
    let star = "";
    for (let i = 0; i < n; i++) {
      if (i >= j) {
        star += "*";
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
}

function Triangle(n) {
  for (let j = 0; j < n; j++) {
    let star = "";
    for (let i = 1; i <= 2 * n - 1; i++) {
      if (i <= n + j && i >= n - j) {
        star += "*";
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
}
function InverseTriangle(n) {
  for (let j = 0; j < n; j++) {
    let star = "";
    for (let i = 1; i <= 2 * n - 1; i++) {
      if (i <= j || i >= 2*n-j) {
        star += " ";
      } else {
        star += "*";
      }
    }
    console.log(star);
  }
}
leftTriangle(5);
leftInverseTriangle(5);
// rightTriangle(5);
// rightInverseTriangle(5);
// Triangle(5);
// InverseTriangle(5);


////////2. heart

