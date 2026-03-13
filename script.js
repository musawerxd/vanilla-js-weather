document.getElementById("theme").innerText = document.body.classList.contains("dark") ? "☀ Light Mode" : "🌙 Dark Mode";

//theme

document.getElementById("theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    let isDark = document.body.classList.contains("dark");
    document.getElementById("theme").innerText = isDark ? "☀ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light")
})


//references 
let musawerxd = document.getElementById("musawerxd")
let weatherIcon = document.querySelector(".weather-icon")
let cityInput = document.getElementById("city-input")
let searchBtn = document.getElementById("search-btn")
let cityName = document.querySelector(".city-name")
let currentDate = document.querySelector(".current-date")
let temparture = document.querySelector(".temperature")
let weatherDesc = document.querySelector(".weather-desc")
let humidity = document.getElementById("humidity")
let wind = document.getElementById("wind")
let feelLike = document.getElementById("feelLike")



//Event Listener

musawerxd.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/musawerxd/", "_blank")
})


cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        printWeather()
    }
})

searchBtn.addEventListener("click", () => {
    printWeather()
})







//fetching Data
async function fetchWeatherData(city) {

    const api_key = "e3776d83ff346f2279d6656d439c779c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${api_key}&units=metric`;

    try {
        const response = await fetch(url)

        //because fetch does not throw errors on HTTP errors even If API returns:        404        401        500
        if (!response.ok) {
            throw new Error("Weather Data not found")
        }
        const data = await response.json();
        return data;

    }
    catch (err) {
        throw err
    }

}

// functions

function setCityandCountry(data) {
    let city = data.name
    let country = data.sys.country
    return `${city}, ${country}`
}

function setTemprature(data) {
    let temparture = `${Math.round(data.main.temp)}°C`
    return temparture;
}

function setWeatherDesc(data) {
    let description = `${data.weather[0].main}, ${data.weather[0].description}`
    if (data.main.humidity > 70) {
        description = `${description} & Probably Humid`
    }
    return description;
}

function setHumidity(data) {
    let humidity = `${data.main.humidity}%`;
    return humidity;
}

function setWind(data) {
    let windSpeed = data.wind.speed
    const windinKM = Math.round(windSpeed * 3.6)
    let wind = `${windinKM} km/h`
    return wind;
}

function setFeelLike(data) {
    let feelLike = `${Math.round(data.main.feels_like)}`;
    return feelLike;
}


function setDate(data) {
    const timezoneoffset = data.timezone;
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000)
    const cityTime = new Date(utc + timezoneoffset * 1000)
    const options = { weekday: "long", day: "numeric", month: "long" };
    return cityTime.toLocaleDateString("en-us", options)
}


// function setIcon(data) {

//     const weather = data.weather[0].main;

//     if (weather === "Clear") {
//         return "☀️";
//     }

//     if (weather === "Clouds") {
//         return "⛅";
//     }

//     if (weather === "Rain" || weather === "Drizzle") {
//         return "🌧️";
//     }

//     if (weather === "Thunderstorm") {
//         return "⛈️";
//     }

//     if (weather === "Snow") {
//         return "❄️";
//     }

//     if (weather === "Mist" || weather === "Fog" || weather === "Haze") {
//         return "🌫️";
//     }

//     return "🌤️"; //default
// }

const iconMap = {
    Clear: "☀️",
    Clouds: "⛅",
    Rain: "🌧️",
    Drizzle: "🌧️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Fog: "🌫️",
    Haze: "🌫️",
};

function setIcon(data) {
    return iconMap[data.weather[0].main] || "🌤️";
}


function updateUi(data) {
    cityName.innerText = setCityandCountry(data)
    currentDate.innerText = setDate(data)
    temparture.innerText = setTemprature(data)
    weatherDesc.innerText = setWeatherDesc(data)
    humidity.innerText = setHumidity(data)
    wind.innerText = setWind(data)
    feelLike.innerText = setFeelLike(data)
    weatherIcon.innerText = setIcon(data)
}






async function printWeather(city = "Multan") {
    city = cityInput.value.trim() || city;
    if (!city) {
        cityInput.style.borderColor = "red"
        cityInput.style.boxShadow = "0 0 0 3px rgba(237, 9, 9, 0.2)"
        setTimeout(() => {
            cityInput.style.borderColor = ""
            cityInput.style.boxShadow = ""
        }, 600);
        return;
    }
    cityInput.value = "";


    try {
        const data = await fetchWeatherData(city);
        updateUi(data);
        console.log(data);
    }
    catch (err) {
        console.log("Error: ", err)
    }
}




window.addEventListener("DOMContentLoaded", () => {
    printWeather()
})