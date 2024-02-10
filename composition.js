
function add(a,b){
    return a+b;
}

function square(val){
    return val * val;
}

const composeTwofunction = (fn1,fn2) => (a,b) => fn2(fn1(a,b));
const task = composeTwofunction(add, square);
console.log(task(2,3));

//how to compose unlimited function

const composeUnlimited = (...fns) => (...values) => fns.reduce((a,b) => b(a), values);