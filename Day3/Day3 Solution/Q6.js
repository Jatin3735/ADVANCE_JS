let str = 'javascript';
function replaceCh (str) {
    let bag = '';
    for(let i=0;i<str.length;i++) {
        if(str[i] == 'a') {
            bag += '@';
        }
        else {
            bag += str[i];
        }
    }
    return bag;
}
console.log(replaceCh(str));
