// const revArr = (arr) => {
//     let arr1 = [];
//     for(let i=arr.length-1;i>=0;i--) {
//         arr1.push(arr[i]);
//     }
//     return arr1;
// }

// let arr = [1,2,3,4,5];
// console.log(revArr(arr));






function revarr(arr){
    let rev = arr.reduce((rev,item)=>[item, ...rev],[]);
    return rev;
}
let arr = [1,2,3,4,5];
console.log(revarr(arr));