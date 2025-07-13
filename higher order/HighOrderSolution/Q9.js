const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];


const obj = products.reduce((acc, pro) => {
  if (!acc[pro.category]) {
    acc[pro.category] = [];
  }
  acc[pro.category].push(pro.price);
  return acc;
}, {});

console.log(Object.entries(obj));


const res = Object.entries(obj).map((v,i)=> {
  const total = v[1].reduce((s,p)=>s+p, 0)
  const avg = total/v[1].length;
  return {category: v[0], average: avg};
})

console.log(res);