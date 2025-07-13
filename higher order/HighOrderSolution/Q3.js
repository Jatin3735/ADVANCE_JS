const input = [12, 46, 32, 64];
//mean
const res = input.reduce((a,b)=>(a+b));
const mean = res/input.length
console.log('Mean : ',mean);

//median

function median (input) {
    const sortArr = input.sort();

    const mid = Math.ceil(sortArr.length/2);

    if(input.length%2==0) {
        return ((sortArr[mid] + sortArr[mid-1])/2);
    }
    else {
        return (sortArr[mid-1]);
    }
}
console.log('Median : ',median(input));



// 2 ki power 2
// 2 ki power 10
// 4 ka underroot 2
// 8 ka underroot 4
// 1 ka underroot 2

// console.log(100**(1/2));