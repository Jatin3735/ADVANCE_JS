const daimond = (n) => {
  let result = "";
  let bag = "";
  let space = "";
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

//   for(let i = n-1;i>=1;i++) {
//     for(let j=2*i-1;j>=1;j++) {
//         bag += '*';
//     }
//     for (let k = i; k <= n; k++) {
//       space += "-";
//     }
//     result += space + bag;
//     result += "\n";
//   }
  return result;
};
console.log(daimond(5));