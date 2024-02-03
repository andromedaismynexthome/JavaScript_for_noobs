//High order function

// A function that takes a function as an argument is called high order fucntion
                //call back
function add(a,b,cb){ //cb is call back
  let result = a + b;
  cb(result);//callback
}
//normal function
add(2,4, function (val){
  console.log(val);
});


// by arrow function
add(3, 4, (val)=> console.log(val));




