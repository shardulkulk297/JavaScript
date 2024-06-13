let a, b=[1,2];
console.log(a, b);

//this can be written as

let [x, y] = [1, 2];
console.log(x, y);

let [p, q, ...rest] = [1,2,3,4,5,6,7]
console.log(p, q, rest);

let obj = {
    l : 1,
    m: 2
}

let {l, m} = obj
console.log(l, m); 


