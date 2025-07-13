let str = 'racecar';
let bag = str;
// function checkPalindrome(str) {
//     let rev = '';
//     let result = '';
//     for(let i= 0;i<bag.length;i++) {
//         let rem = bag[(bag.length - 1)];
//         rev = rev + rem;
//         bag.length = bag.length - 1;
//     }
//     if(rev == str) {
//         result = 'Palindrome'
//     }
//     else {
//         result = 'Not palindrome';
//     }
//     return result;
// }
// console.log(checkPalindrome(str));

function checkPalindrome(str) {
    let rev = '';
    for(let i=bag.length-1;i>=0;i--) {
        rev += bag[i];
    }
    if(rev == str) {
        return 'Palindrome';
    }
    else {
        return 'Not palindrome';
    }
}
console.log(checkPalindrome(str));