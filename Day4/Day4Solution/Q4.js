// const dupValue = (arr) => {
//     let obj = {};
//     let res = [];

//     for(let i=0;i<arr.length;i++) {
//         let ch = arr[i];

//         if(!obj[ch]) {
//             obj[ch] = 1;
//             res.push(ch);
//         }
//     }
//     return res;
// }

// let arr = [1,2,1,3,4,1,2];
// console.log(dupValue(arr));





// function duparr(arr){
//     let obj = {}
//     let res = []
//     let ch = arr.map(item=>{
//         if(!obj[item]){
//             obj[item] = 1
//             res.push(item)
//         }
//     })
//     return res
// }
// let arr = [1,2,3,2,4,2,3,5];
// console.log(duparr(arr));






// const duparr = (arr) => arr.reduce((acc,item)=>acc.includes(item) ? acc : [...acc, item],[]);
// let arr = [1,2,4,3,2,3,5,3];
// console.log(duparr(arr.sort()));





const duparr = (arr) => [...new Set(arr)];     /*set => contain unique value in object */    /*object to array => [...new]*/ 
let arr = [1,2,3,2,4,2,3,5];
console.log(duparr(arr));