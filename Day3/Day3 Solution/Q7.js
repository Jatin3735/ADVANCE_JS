let str = 'hi hello there';
function firstOcc (str) {
    for(let i=0;i<str.length;i++) {
        if(str[i]=='e') {
            return i;
        }
    }
}
console.log(firstOcc(str));