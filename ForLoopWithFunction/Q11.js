let n = 7;
let n1 = 0; 
console.log(n1);
let n2= 1;
console.log(n2);
for(let i=1; i<=n; i++) {
    let cur = n2 + n1;
    console.log(cur);
    n1 = n2;
    n2 = cur;
}