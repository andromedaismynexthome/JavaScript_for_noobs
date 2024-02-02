//function


function sayHello(){
      console.log('hey piyush')
}

sayHello()
//         argument 
function add(a,b){
    return a + b
}

let a = add(5,2) 
console.log(a)

           
function addnumbers(...tufail){ //spread operator (...)
let ans = 0
	for(let i =0;i<tufail.length;i=i+1){
	     ans += tufail[i];
	}
   console.log(ans)
}

addnumbers(1,2,3,2,3,2,4)
