const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const errorMessage = document.querySelector("#errorMessage");
const weatherInfo = document.querySelector("#weatherInfo");

const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");



const weatherApi = 'fd463a639803211d9332762e4eb79247';

function start() {

    handleEvent();

}

start();

function getWeatherData(city, cb){
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}&units=metric&lang=vi`;
    fetch(weatherUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            cb(null, data);
        })
        .catch(function(error){
            cb(error, null);
        })
}

function handleEvent() {
    searchBtn.addEventListener("click", function(){
        const city = cityInput.value;
        getWeatherData(city, function(error, data){
            if(error){
                errorMessage.classList.remove('hidden');
                weatherInfo.classList.add('hidden');
                return;
            }
            errorMessage.classList.add('hidden');
            weatherInfo.classList.remove('hidden');

            cityName.innerText = data.name;
            temperature.innerText = Math.round(data.main.temp) + "°C";
            description.innerText = data.weather[0].description;
            humidity.innerText = data.main.humidity + "%";
            windSpeed.innerText = data.wind.speed + " km/h";
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
    })

    cityInput.onkeypress = (e) => {
        if(e.key === 'Enter'){
            searchBtn.click();
        }
    }
}