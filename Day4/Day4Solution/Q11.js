let str = 'racecar';

const palindrome = () => {
    let bag = str;
    let res='';
    for(let i=str.length-1;i>=0;i--) {
        res += str[i];
    }
    if(bag === res) {
        return 'palindrome';
    }
    else {
        return 'not palindrome';
    }
}
console.log(palindrome(str));