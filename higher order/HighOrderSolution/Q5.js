const input = [
 {
 name: "John",
 age: 13, },
 {
 name: "Mark",
 age: 56, },
 {
 name: "Rachel",
 age: 45, },
 {
 name: "Nate",
 age: 67, },
 {
 name: "Jennifer",
 age: 65, },
];

let arr = [];

const youngest = Math.min(...input.map((value)=>value.age));
const oldest = Math.max(...input.map((value)=>value.age));
const diff = oldest - youngest;
arr.push(youngest,oldest,diff)
console.log(arr);

