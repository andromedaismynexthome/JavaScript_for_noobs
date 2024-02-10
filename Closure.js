// this is so important for frontend developer
// closure is a combination of functions

function main(){
    const name = 'tufai'
    function sayMyname(){
        console.log(name);
    }
    return sayMyname();
}

//application
function makeTextsize(size){

    function changeSize(){
        myName.style.fontSize = `${size}`;
    }

    return changeSize();
}

const chnage = makeTextsize(20);
chnage();