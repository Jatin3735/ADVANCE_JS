let str = 'Hello World'
function lowertoUpper (str) {
    let bag = '';
    for(let i=0;i<str.length;i++) {
        bag +=str[i].toUpperCase();
    }
    return bag;
} 
console.log(lowertoUpper(str));
//used built-in function