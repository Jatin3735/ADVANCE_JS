let str = "rahul is good boy";
let count = 0;
for(let i=0;i<str.length;i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
        count = count + 1;
        console.log(i,"=>",str[i]);
    }
}
console.log("total vowel in given string","=>",count);