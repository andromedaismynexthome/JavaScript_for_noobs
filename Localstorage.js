// local storage in javascript
const button = document.getElementById("click");
const input = document.getElementById("input-feild");
const lname = document.getElementById("name");
button.addEventListener('click', () => {
    const value  = input.value;
    console.log(value);
    localStorage.setItem("name", value);
    location.reload();
});

window.addEventListener("load", ()=>{
    const username = localStorage.getItem("name");
    lname.innerText = username;
})