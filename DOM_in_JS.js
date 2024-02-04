// DOM in js
// Document object model

// query selector
/*
 * selectors
 * - tag name
 * - id #
 * - class .
 */

const body = document.querySelector("body");
body.innerHTML = "<h1>heelo</h1>"


//Select element by ID

const el = document.getElementById('h');
el.innerText = "ballw";


// get element by class name

const element = document.getElementByClassName("block");


//event listners

function handk(){
alert('hahahha');
}
const l = document.getElementById("click");
l.onclick = () => console.log("i cli");
