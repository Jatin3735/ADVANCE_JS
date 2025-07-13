let str = "hello world";
function extract (str) {
    let res = [];
    for(let i=0;i<str.length;i++) {
        let bag=''
        for(let j=i;j<str.length;j++){
            bag+=str[j]
            res.push(bag);
        }
        bag=''
    }
    return res;
}
console.log(extract(str));