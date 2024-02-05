//
const button = document.getElementById("click");

const container = document.getElementById("my-container");

button.addEventListener('click', ()=>{
    const el = document.createElement("h1");
	el.innerText = "Tufail";
	container.appendChild(el);
});
