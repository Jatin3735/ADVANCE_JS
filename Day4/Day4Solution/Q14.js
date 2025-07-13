let str = 'hello world from javascript';

const stringToArray = (str)=>{
    const arr =[];
    let word = '';

    for(let char of str){
        if(char === ' '){
            arr.push(word)
            word=''
        }
        else{
            word+=char;
        }
    }
    arr.push(word)
    return arr
}
const arr = stringToArray(str);

function capitalizeCh(arr) {
    let res = []
    for(let i=0;i<arr.length;i++) {
        let start = arr[i][0].toUpperCase();
        let end = arr[i].slice(1);
        res.push(start + end);
    }
    
    return res;
}
console.log(capitalizeCh(arr));