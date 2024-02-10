
//immediately invoke function 

(function add(a,b){console.log(a+b)})(2,3);

(() => console.log("hi"))();

const date = (() => new Date())()
console.log(date);

//bank 

const atm = ((initialbalace)=> {
    let balance = initialbalace;
    function withdraw(amt){
        if(amt > balance){
            return "are u kidding";
        } else{
            balance -= amt;
            return balance;
        }
    }
    return { withdraw };
} )

const tufail = atm(1000);
console.log(tufail.withdraw(100));