let name = "Jatin";

// find the length of string 
console.log(name.length);

// to change in uppercase 
console.log(name.toUpperCase());

// to change in lowercase 
console.log(name.toLowerCase());


// slice method => it will return a new string from the given index to the end of the string

console.log(name.slice(1,4)); // it will return "ati" from the index 1 to 4


// replace an word using string with another word
console.log(name.replace("Jat", "nit")); // change jatin => nitin ("jat" is replaced by "nit")



// add two strings using concat 
let friend = "nitin";
console.log(name.concat( friend));
console.log(name.concat(" is a friend of ", friend));  // add this string with the name string



// remove whitespace in a given string     trimStart() => remove from start    trimEnd() => remove from the end of the string
let name2 = "     jatin     ";
console.log(name2.trim());    



// find an word in a string 
let name3 = "jatin is a good boy";
let word = "good"; // it will return true if the word is found otherwise fals
console.log(name3.includes(word));
console.log(`the word ${word} ${name3.includes(word) ? 'is' : 'is not'} in the sentence`);



let str = "please give me Rs 1000"  //print the only amount 
// let amount = str.slice(18)  //using from index 18 and print the remain 
//another type 
// let amount = str.slice("please give me Rs ".length);   // length of starting words
// console.log(amount);    // it wil give string 

// console.log(typeof amount);   // here the 1000 is a string not a number 

// convert string to number using parseInt() or Number() function

let amount = Number.parseInt(str.slice("please give me Rs ".length)); // it will convert the string to number
console.log(amount);
console.log(typeof amount);





let str2 = "Jatin";
str2[0] = "N";  //it is not change , because string is immutable that cannot be changed
console.log(str2);