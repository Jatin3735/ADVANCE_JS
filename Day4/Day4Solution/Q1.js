// const largest = (arr) => {
//     let max = arr[0];
//     for(let i= 0;i<arr.length;i++) {
//         if(max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let arr = [1,2,9,4,5];
// console.log(largest(arr));



function largest(arr){
    let max = Math.max(...arr);
    return max;
}
let arr = [1,2,7,9,4,3];
console.log(largest(arr));