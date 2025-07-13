let str = 'a1b2c3';
function replaceNum (str) {
    let rep = '#';
    let  bag = '';
    for(let i=0;i<str.length;i++) {
        if(str[i]=='0' || str[i]=='1' || str[i]=='2' || str[i]=='3'|| str[i]=='4' || str[i]=='5' || str[i]=='6' || str[i]=='7' || str[i]=='8' || str[i]=='9' ) {
            bag += rep;
        }
        else {
            bag += str[i];
        }
    }
    return bag;
}
console.log(replaceNum(str));