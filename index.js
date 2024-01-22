const city = document.querySelector(".location .city-name")
const desc = document.querySelector(".status h2")
const windSpeed = document.querySelector(".wind-speed h3 span")
const temp = document.querySelector(".temp h3 span")
const humidity = document.querySelector(".humidity h3 span")


const input = document.querySelector("input")
const button = document.querySelector("button")



const show = document.querySelectorAll(".show")
const failed = document.querySelector(".failed")


var url = "https://api.openweathermap.org/data/2.5/weather?&appid=a46b39df21a69323618c7ab69ef6c24f&units=metric&q="



async function weather(cityName) {
    let raw = await fetch(url+cityName)
    let data = await raw.json()
    console.log(data)



    if (data.message) {

        show.forEach(el=>{
            el.classList.add("hide")
        })
        failed.classList.remove("hide")

    }
    else {
        show.forEach(el=>{
            el.classList.remove("hide")
        })
        failed.classList.add("hide")

        city.innerHTML = data.name;
        desc.innerHTML=data.weather[0].main;
        windSpeed.innerHTML=data.wind.speed+" meter/sec";
        temp.innerHTML=data.main.temp+" °C";
        humidity.innerHTML=data.main.humidity+" %";


      
    }
}


button.addEventListener("click", () => {

    weather(input.value)
    input.value=""

})

