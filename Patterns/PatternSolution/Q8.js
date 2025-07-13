function pattern() {
    let bag='';
    for(let i=5;i>=1;i--) {
        for(let j=i;j>=1;j--) {
            bag += j;
        }
        bag += '\n';
    }
    return bag;
}
console.log(pattern());