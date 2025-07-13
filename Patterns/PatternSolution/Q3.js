function pattern() {
    let bag='';
    for(let i=5;i>=1;i--) {
        for(let j=1;j<=i;j++) {
            bag += '*';
        }
        bag += '\n';
    }
    return bag;
}
console.log(pattern());