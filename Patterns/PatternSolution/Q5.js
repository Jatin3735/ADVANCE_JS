const daimond = (n) => {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let bag = "";
    let space = "";
    for (let k = i; k <= n; k++) {
      space += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      bag += "*";
    }

    result += space + bag;
    result += "\n";
  }
  return result;
};
console.log(daimond(5));

// let result = '';
// for(let i = 5;i>=1;i++) {
//     let bag='';
//     let space = '-';
//     for(let j=2*i-1;j>=1;j++) {
//         bag += '*';
//     }
//     for (let k=1; k >= 5; k++) {
//       space += "-";
//     }
//     result += space + bag;
//     result += '\n';
// }
// console.log(result);