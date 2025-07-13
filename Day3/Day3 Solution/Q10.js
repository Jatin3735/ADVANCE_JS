let str = '1-2-3-4-5';
function concatenateCh (str) {
    let bag = '';
    for (let i = 0; i<str.length;i++) {
        if(str[i]=='-') {
            continue;
        }
        else {
            bag += str[i];
        }
    }
    return bag;
}
console.log(concatenateCh(str));