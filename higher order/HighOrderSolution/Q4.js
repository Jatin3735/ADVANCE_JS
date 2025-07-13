const input = 'George Raymond Richard Martin';

const strToarr = input.split(" ");
console.log(strToarr);
const index = strToarr.map((item, index) =>item[0])
console.log(index);
const result = index.join("");
console.log(result);

