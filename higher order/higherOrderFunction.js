const arr = [1,2,3,4,5];

const mapFunction = arr.map((item)=> item**2)
console.log("Map Function => ",mapFunction);

const filterFunction = arr.filter((item)=> item%2==1)
console.log("Filter Function => ",filterFunction);

const reduceFunction = arr.reduce((s,a)=> s*a)
console.log("Reduce Function => ",reduceFunction);

