let n = 9;
let count= 0
for(let i=2;i<=n/2;i++){
    if(n%i==0){
        count++
    }
}
if(count!=0 && n>1){
    console.log("not prime");
}
else{
    console.log("prime");
}