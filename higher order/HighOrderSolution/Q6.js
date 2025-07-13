const input = "Every developer likes to mix kubernetes and javascript";

const strToarr = input.split(" ");

const res = strToarr.map((a,b)=>{
    const start = a[0];
    const end = a[a.length-1];
    const len = a.length-2;
    return (start+len+end)
})
const arrTostr = res.join(' ').map((v)=>{
    if(v.length<=3) {
        return v;
    }
    else {
        
    }
})
console.log(arrTostr);