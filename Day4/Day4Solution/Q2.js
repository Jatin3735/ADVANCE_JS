// function arrSum (arr) {
//     let sum = 0;
//     for(let i=0;i<arr.length;i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let arr = [1,2,3,4,5];
// console.log(arrSum(arr));




function sum(arr){
    return arr.reduce((s,i)=>s+i,0)
}
let arr = [1,2,3,4,5];
console.log(sum(arr));