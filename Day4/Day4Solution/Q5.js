// Without using object

// const intersectArr = (arr1,arr2) => {
//     let res = [];
//     for(let i=0;i<arr1.length;i++) {
//         let ch = arr1[i];
//         for(let j=0; j<arr2.length; j++) {
//             if(ch === arr2[j]) {
//                 res.push(ch);
//             }
//         }
//     }
//     return res;
// }

// let arr1 = [1,2,3,4,5];
// let arr2 = [2,6,8,1,5];
// console.log(intersectArr(arr1,arr2));

// let arr1 = [1,2,3,4,5];
// let arr2 = [3,6,7,1,2];
// let res = [];
// for(let i=0;i<arr1.length;i++) {
//     let ch = arr1[i];
//     for(let j=0;j<arr2.length;j++) {
//         if(ch==arr2[j]) {
//             res.push(ch);
//         }
//     }
// }
// console.log(res);







// const intersection = (arr1,arr2) => {
//     return [...new Set(arr1.filter(item => arr2.includes(item)))];
// }
// let a = [1,2,3,4,5]
// let b = [2,6,8,1,3];
// console.log(intersection(a,b));




function intersection(arr1,arr2){
    return (arr1.filter(item => arr2.includes(item)));
}
let a = [1,2,3,4,5];
let b = [2,6,8,1,3];
console.log(intersection(a,b));