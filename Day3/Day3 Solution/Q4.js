let str = 'This is a test. Is it?';
function substringMatch (str) {
    let count = 0;
    for(let i=0;i<str.length;i++) {
        if(str[i]=='i' && str[i+1]=='s') {
            count++; 
        } 

    }
    return count;
}
console.log(substringMatch(str));