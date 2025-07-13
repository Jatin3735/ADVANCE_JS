let num = [1,2,3,4,5,6,7];
// console.log(num);   // it is in array type

// fchange array to string using tostring function 
// let b = num.toString();
// console.log(b);  // it is in string type


// join method 
// let c = num.join("-");
// console.log(c);
// console.log(typeof c);


// // pop() method  => remove last index value in an array 
// let d = num.pop();
// console.log(num, d);


// // push() method => add value in last index of an array 
// let e = num.push(78)
// console.log(num);


// shift method  => remove first index value in an array
// let f = num.shift()
// console.log(f,num);


// unshift method => add value in first index of an array
// let g = num.unshift(90)
// console.log(g,num);  // g is length of array 


// delete method => remove index value in an array but length of array is not change
// delete num[0];
// console.log(num.length);  // length is same \



// concat method => add two array in one array two or more
// let num2 = [4,5,6];
// let new_array = num.concat(num2)    // both array are remain same and return a new array 
// console.log(new_array);  



// sort method => sort array in ascending order according to alphabetical order
// let num2 = [5,11,13]
// console.log(num2.sort());   // it wil return 11 13 5 because 1 is before placed than the 5 


// const compare = (a,b) => {
//     return a-b                          //it will ascending order        // b-a  => it will give descending order
// }
// let num2 = [11,13,5];
// console.log(num2.sort(compare));






// splice and slice
// num.splice(1,3,8,9,10)    // our array is [1,2,3]   and splice(1,1,5) => from 1 and delte othree value and add other three value 
// console.log(num);


//slice
// console.log(num.slice(1,3));   // it will give items from index 1 to index 3 




