
//Promisification
function promisify(fn) {
    return function (...args){
        return new Promise((resolve, reject),
        fn(...args , (error, result) => {
            if (error) return reject(error);
            return resolve(result); 
        })
    )
    }
} 
//without promise