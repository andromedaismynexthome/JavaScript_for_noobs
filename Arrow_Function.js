// arrow function
// 1. syntax
const sayhello = () => {
  console.log("hey")
};

const add = (a,b) => {
  return a + b
}

const multi = (a,b) => a * b; // one liner 

console.log(multi(2,3));

// 2. 'argument' keyword // not used in arrow function

const nums = (...numbers)=> {
      for(let i = 1; i<=numbers.length;i++){
         console.log(numbers[i])
      }
};

console.log(nums(1,2,3,4,5))


//3. Hoisting 
// for arrow function we cant initialize fucntion before 
//sahello() //it give error
const sahello = () => {
 console.log('hello')
};

sahello();

//4. this keyword
 // it used to point out value 
// but in arrow function it point to browser window


