let str = "hello jatin welcome to hartrons skill center";
 
// let x=str;
// for(let i=0;i<a.length;i++){
//     let aa =''
//     for(let j=0;j<=i;j++){
//        aa=aa+j
//     }
//     console.log(aa);
// }



// let c = a[0]
// for (let i = 0; i < a.length; i++) {
//     if (c != a[i]) {
//         break;
//     }
//     c++

// }

// console.log(c);

//   


// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[i]+a[j]==t){
//             count++;
//             console.log(count +" pair "+ "=> "+a[i]+"+"+a[j]);
//         }
//     }
// }




// let res = '';   
// for(let i=str.length-1;i>=0;i--){
//     res+=str[i];
// }
// if(x==res){
//     console.log("palindrome");
// }
// else{
//     console.log("not");
// }



// for(let i=0;i<str.length;i++){
//     if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
//         console.log(str[i])
//     }
// }



// let arr = str.split(" ");
// let len = [];
// let max = 0;
// for(let i=0;i<arr.length;i++){
//     len.push(arr[i].length);
//     if(len[i]>max){
//         max=len[i];
//         res=arr[i]
//     }
// }
// console.log(res);



// let arr = [];
// let word = '';
// let len=[];
// let max=0;
// let res=''
// for(let i=0;i<str.length;i++){
//     if(str[i]!=" "){
//         word+=str[i];
//     }
//     else{
//         arr.push(word);
//         word='';
//     }
// }
// arr.push(word)

// for(let i=0;i<arr.length;i++){
//     len.push(arr[i].length)
//     if(len[i]>max){
//         max=len[i];
//         res=arr[i]
//     }
// }
// console.log(res);



// make title capitalize 
// let arr = str.split(" ")
// let res = "";

// for(let i=0;i<arr.length;i++){
//     let word = arr[i];
//     let cword="";
//     for(let j=0;j<word.length;j++){
//         if(j==0){
//             cword+=word[j].toUpperCase()
//         }
//         else{
//             cword+=word[j].toLowerCase()
//         }
//     }
//     res+=cword+" ";
// }
// console.log(res);




// functions

// function rfup(arr){
//     let unique=[];
//     for(let num of arr){
//         if(!unique.includes(num)){
//             unique.push(num);
//         }
//     }
//     return unique;
// }
// x=[1,2,2,2,2,3,53,4,4,46,]
// console.log(rfup(x));



// intersection 

// function intersection(arr1,arr2){
//     let res=[];
//     for(let num of arr1){
//         for(let num2 of arr2){
//             if(num===num2){
//                 res.push(num);
//             }
//         }
//     }
//     return res;
// }
// x=[1,2,3,4,5];
// y=[4,5,6,7,8];
// console.log(intersection(x,y));




// chunking

// function chunking(arr){
//     for(let i=0;i<arr.length;i++){
//         let res=''
//         for(let j=0;j<i;j++){
//             res+=j;
//         }
//         return res;
//     }
// }
// x=[1,2,3,4,5];
// console.log(chunking(x));



  