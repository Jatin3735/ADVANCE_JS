const input = [1, -4, 12, 0, -3, 29, -150];

const pos = input.filter((a,b)=>a>0);
const res = pos.reduce((sum,value)=> sum + value);
console.log(res);