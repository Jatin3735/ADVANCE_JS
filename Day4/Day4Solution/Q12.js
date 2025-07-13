let str = 'hello world';;

const countVowels = (str) => {
    let count = 0;
    let ch = '';
    for(let i=0;i<str.length;i++) {
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u') {
            count++;
            ch +=`'${str[i]}' at index ${i}\n`;
        }
    }
    console.log('No of vowels:',count);
    console.log("positions of vowels: \n"+ch);
}

countVowels(str);