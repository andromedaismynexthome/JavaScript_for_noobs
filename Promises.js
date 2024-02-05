//
// Promises in javascript

// async and await
// asynchronus task return promise
/*
 * prefer most this one 
async function getData(){
 let result = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
 );
	const fe = document.getElemetById("my-container");
	console.log(await result.json());
        for(let i = 0;i<result.length;i++){
           fe.appendChild("<li>result[i]</li>");
	}
}

getData()

*/

fetch("https://jsonplaceholder.typicode.com/posts")
 .then((data)=>{
   console.log(data);
})
  .catch((err)=>{
  console.log(err)
});
