
const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityname = document.getElementById("cityname") || { value : ''};
const citytime = document.getElementById("city-time") || { value : ''};
const cityhumidity = document.getElementById("city- humidity") || { value : ''};

async function getData(city){

    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=fa31add3aa76447ca5a91441240502&q=${city}&aqi=yes`)
    return await promise.json()

}
button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityname.innerText = `${result.location.country}, ${result.location.name} - ${result.location.region}`
    cityhumidity.innerText = `humidity: ${result.current.temp_c}`
    citytime.innerText = result.location.localtime
    
});


//https://api.weatherapi.com/v1/current.json?key=fa31add3aa76447ca5a91441240502&q=India&aqi=yes