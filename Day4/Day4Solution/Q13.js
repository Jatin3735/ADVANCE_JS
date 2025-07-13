let str = 'This is a string';

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

const largest = (arr) => {
    let len = [];
    let res = '';
    let max =0;
    for(let i=0;i<arr.length;i++) {
        len = arr[i].length;
        if(max<len) {
            max = len;
            res = arr[i];;
        }
        
    }
    return res;    
}
console.log(largest(arr));