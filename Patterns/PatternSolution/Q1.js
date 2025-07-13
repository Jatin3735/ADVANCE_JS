function a() {
    let bag = '';
    for(let i =0;i<5;i++) {
        for(let j=0;j<5;j++) {
            bag += '* ';
        }
        bag+='\n'
    }
    return bag;
}
    console.log(a());