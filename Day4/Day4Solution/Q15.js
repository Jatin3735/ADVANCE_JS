let str1 = 'listen';
let str2 = 'silent';

const anagramStr = (str1, str2) => {
    let l1 = str1.length;
    let l2 = str2.length;

    //len not equal automatically false
    if(l1!=l2) {
        return false;
    }

    //for str1
    let arr1 = [];
    for(let i=0;i<l1;i++) {
        arr1.push(str1[i]);
    }

    for(let i=0;i<arr1.length;i++) {
        for(let j=0;j<arr1.length-i-1;j++) {
            if(arr1[j] > arr1[j+1]) {
                let temp = arr1[j];
                arr1[j]=arr1[j+1];
                arr1[j+1]=temp;
            }
        }
    }
    let sortstr1 = '';
    for(let i=0;i<arr1.length;i++) {
        sortstr1 += arr1[i];
    }

    //for str2
    let arr2 = [];
    for(let i=0;i<l2;i++) {
        arr2.push(str1[i]);
    }

    for(let i=0;i<arr2.length;i++) {
        for(let j=0;j<arr2.length-i-1;j++) {
            if(arr2[j] > arr2[j+1]) {
                let temp = arr2[j];
                arr2[j]=arr2[j+1];
                arr2[j+1]=temp;
            }
        }
    }
    let sortstr2 = '';
    for(let i=0;i<arr2.length;i++) {
        sortstr2 += arr2[i];
    }

    //compare
    let bag = 0;
    for(let i=0;i<l1;i++) {
        if(sortstr1[i]!=sortstr2[i]) {
            return false;
            bag = 1;
        }
    }
    if(bag!=1) {
        return true;
    }
}

console.log(anagramStr(str1,str2));