const pairSum = (arr) => {
    let obj = {};
    let sum = 10;
    for(let i=0; i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++) {
            if(arr[i] + arr[j] === sum)  {
                if(!obj[i] && !obj[j]) {
                    obj[arr[i]] = arr[j];
                }
            }
        }
    }
    return obj;
}


