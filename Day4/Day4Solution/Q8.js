const missing = (arr) =>{
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1] - arr[i] !=  1){
            return arr[i] +1
        }
    }
    return "nothing are missing";
}
let arr = [1, 2, 3, 5, 6, 7, 8];
console.log("missing is =>",missing(arr));  