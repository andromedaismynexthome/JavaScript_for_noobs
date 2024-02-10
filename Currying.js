function add(a){
    return function (b){
        return function (c){
            return a + b + c;
        };
    };
}

console.log(add(2)(3)(4))

//application of currying

// function sendAutoEmail(to){
//     return function (subject){
//         return function (body){
//             console.log(`sending email to ${to}-${subject}-${body}`);
//         }
//     }
// }
//moder javascript
const sendAutoEmail = subject => body => `sending email to ${to}-${subject}-${body}`; 
//first developer
let step1 = sendAutoEmail("Tufailkhan.dev@gmail.com");
//second developer
let step2 = step1("subject is game");
//third developer
console.log(step2("tufail done playing video games"));