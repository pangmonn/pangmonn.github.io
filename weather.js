const weather = document.querySelector(".js-weather");
const API_KEY = "f3f3bbb4d1892ce31bf24f105463eef5";

function getWeather(lat, long) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })
}

function loadCoords() {
    const loadedCoords = localStorage.getItem("coords");
    if(loadedCoords===null) {
        askForCoords();
    }
    else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(succesLo,failLo);
}

function succesLo(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function failLo() {
    console.log("Fail to load location.");
}

function saveCoords(coordsObj) {
    localStorage.setItem("coords",JSON.stringify(coordsObj));
}

function init() {
    loadCoords();
}

init();
