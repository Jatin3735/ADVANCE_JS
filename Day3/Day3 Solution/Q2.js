let str = 'Hello World!';

function countUpper (str) {
    let count = 0;
    for(let i=0; i<str.length;i++) {
        if(str[i]==' ' || str[i]=='!') {
            continue;
        }
        if(str[i] == str[i].toUpperCase()) {
            count++;
        }
    }
    return count;
}
console.log(countUpper(str));