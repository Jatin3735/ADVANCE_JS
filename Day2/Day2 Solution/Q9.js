let arr = [1,2,5,34,7,3];
let max = arr[0];
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
console.log(max);
