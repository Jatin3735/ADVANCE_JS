// square of all item
// const input = [1,2,3,4,5];

// const result = input.map((item)=>item**2);
// console.log("Result",result);




// sum of every postive number
// const input = [1,-4,12,0,-3,29,-150];

// const postive = input.filter((item)=>item>0)
// const result = postive.reduce((s,a)=>s+a);

// console.log("Result",result);




// // mean and median 
// const input = [12,46,32,64];
// // mean 
// const mean = input.reduce((s,a)=>s+a)/input.length;
// // median 

// const result ={mean,median}
// console.log(result);





// find initail letter of an word 
// const input = "George Raymond Richard Martin";
// const res = input.split(" ").map(word=>word[0]).join("");
// console.log(res);





// age difference from the youngest and oldest 
// const input = [
//     {name:"john",   age:13,},
//     {name:"mark",   age:56,},
//     {name:"rachel",   age:45,},
//     {name:"nate",   age:67,},
//     {name:"jennifer",   age:65,},
// ]

// const ages = input.map(i=>i.age);


// // const low = ages.reduce((min,age)=>age<min ?age:min, ages[0]);
// // const high = ages.reduce((max,age)=>age>max ? age:max ,ages[0]);
// // const diff = high-low;
// // const res = [low,high,diff];
// // console.log(res);

//         // OR

//         // with spread operator 
// const low = Math.min(...ages);
// const high = Math.max(...ages);
// const diff = high-low;
// const result = [low,high,diff];
// console.log(ages);




// numeronyms 
// const input = "Every developer likes to mix kubernetes and javascript";

// const arr = input.split(" ");
// const words = arr.map(word=>{
//     if(word.length<=3) return word;
//     return word[0]+(word.length-2)+word[word.length-1];
// })
// const res = words.join(" ");
// console.log(res);



// n! factorial with reduce or map 
const input = 6;

        // with map 
// const arr = [];
// for(let i=1;i<=input;i++){
//     arr.push(i);
// }
// let res = 1;
// arr.map(val=>res*=val);
// console.log(res);

            // with reduce 
// const arr = [];
// for(let i=1;i<=input;i++){
//     arr.push(i);
// }
// const res = arr.reduce((mul,val)=>mul*val,1);
// console.log(res);