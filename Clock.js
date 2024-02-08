const h = document.getElementById('hours');
const m = document.getElementById('min');
const s = document.getElementById('sec');
const button = document.getElementById('stop');
const Timing = setInterval(()=>{
    const current = new Date();
    // const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`
    h.innerText = `${current.getHours()}:`
    m.innerText = `${current.getMinutes()}:`
    s.innerText = current.getSeconds();
},1000);

button.addEventListener('click',()=>{
    clearInterval(Timing);
})

//stop watch
const input = document.getElementById('input-time');
const st = document.getElementById('start-Time');
const show = document.getElementById('timing');

st.addEventListener('click',()=>{
    let s = input.value
    
    const aa = setInterval(() => {
        show.innerText = s--;
        console.log(s);
        if(s==-1){
            clearInterval(aa);
        }     
    }, 1000);

    setTimeout(()=>{
        alert("timeOut");
    }, s*1000)
    


    
    

    
})