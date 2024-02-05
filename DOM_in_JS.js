// DOM in js
// Document object model

// query selector
/*
 * selectors
 * - tag name
 * - id #
 * - class .
 */

const body = document.querySelector("body").children;
//body.innerHTML = "<h1>heelo</h1>"


//Select element by ID

//const el = document.getElementById('h');
//el.innerText = "ballw";


// get element by class name

//const element = document.getElementsByClassName("block");


//event listners

//function handk(){
//alert('hahahha');
//}
/*const cl = document.getElementById("click");
cl.onclick = () =>{
	console.log("i cli");
	handk();
};
*/
 
//const cl = document.getElementById("click");
/*cl.addEventListener("click", ()=>{
 body.style.backgroundColor = 'blue';
});
*/

for (let i = 0; i < body.length; i++){
body.item(i).addEventListener("click", () => {
body.item(i).remove();
});

}



