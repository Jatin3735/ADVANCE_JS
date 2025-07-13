function a() {
    let bag ='';
    for(let i=1;i<=5;i++) {
        for(let j=1;j<=i;j++) {
            bag += '*';
        }
        bag+='\n';
    }
    return bag;
}
console.log(a());
