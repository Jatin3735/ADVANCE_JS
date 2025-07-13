let str = 'hello world';

function removeSpace (str) {
    let bag = '';
    for(let i=0;i<str.length;i++) {
        if(str[i]==' '){
            continue
        }
        else {
            bag += str[i];
        }
    }
    return bag;
}
console.log(removeSpace(str));