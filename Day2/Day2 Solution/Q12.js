let n =121;
let temp = n;
let rev = 0;
while(temp>0) {
    rem = temp%10;
    rev = rev*10 + rem;
    temp =  Math.floor(temp/10); //will give in decimal so we use Math.floor() to get integer
}
if(n == rev) {
    console.log("The number is a palindrome");
}
else {
    console.log("The number is not a palindrome");
}