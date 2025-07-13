let n = 7;
let temp = 0;
for(let i =2; i<n; i++) {
    if(n%i==0) {
        console.log('Not prime');
        temp =1;
    }
}
if(temp!=1) {
    console.log('Prime');
}
