let str = 'aaabbcddd';

const duplicate = (str) => {
    let obj = {};
    let res = '';
    for(let i=0;i<str.length;i++) {
        let ch = str[i];

        if(!obj[ch]) {
            obj[ch] = 1;
            res += ch;
        }
    }
    return res;
}

console.log(duplicate(str));