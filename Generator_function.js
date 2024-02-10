// what is iterator pattern
//provide the customization the behavior of for...of loops
// function makeIterator(start = 0, end = Infinity, step=1){
//     let nextstart = start;
//     let interationCount = 0;

//     return {
//         next() {
//             let result;
//             if (interationCount < end){
//                 result = { value: nextstart, done: false }
//                 nextstart += step;
//                 interationCount++;
//                 return result;
//             }

//             return {
//                 value: interationCount, done: true
//             }
//         }
//     };
// }

// const myiteration = makeIterator(1,20,1);
// let result = myiteration.next()

// while(!result.done){
//     console.log(result.value);
//     result = myiteration.next();
// }

// what is generator function
function* onetoten(start , end){
    for(let i = start; i<=end;i++){
        yield i;
    }
}

const number = onetoten(1,10);
for(const i of number){
    console.log(i);
}
// what is yeild keyword



