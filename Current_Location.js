
const button = document.getElementById("user-location");

const getData = async (lon,lati) => {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=fa31add3aa76447ca5a91441240502&q=${lon},${lati}&aqi=yes`)
    return await promise.json()
}
// getting user location is not instantanias we need async fucntion

button.addEventListener("click", async () => {
        const result = navigator.geolocation.getCurrentPosition(async (position)=>{
          const my = await getData(position.coords.latitude,position.coords.longitude,);
            console.log(my);
        }, ()=>{
            console.log("there is an issue")
        });

})