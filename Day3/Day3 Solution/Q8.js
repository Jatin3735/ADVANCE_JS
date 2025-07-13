let str = 'banana';
function frequencyCount(str) {
    let fre = {};
    for(let i =0;i<str.length;i++) {
        let char = str[i];

        if(str[i]==' '){
            continue;
        }
        if(fre[char]) {
            fre[char]++;
        }
        else {
            fre[char] = 1;
        }
    }
    return fre;
}
console.log(frequencyCount(str));