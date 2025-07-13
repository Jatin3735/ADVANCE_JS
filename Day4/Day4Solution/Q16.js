function counting(str) {
    let fre = {};
    for(let i=0;i<str.length;i++) {
        let char = str[i];

        if(char==' ') {
            continue
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
let str = 'hello world';
console.log(counting(str));