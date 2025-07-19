// let n = 9;
// let count= 0
// for(let i=2;i<=n/2;i++){
//     if(n%i==0){
//         count++
//     }
// }
// if(count!=0 && n>1){
//     console.log("not prime");
// }
// else{
//     console.log("prime");
// }


let n = 15;
if(n>1){
    let fact = 0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            fact++
            console.log(i);
        }
    }
    if(fact==2){
        console.log("Prime");
    }
    else{
        console.log("Not Prime");
    }
}
else{
    console.log("not prime");
}

