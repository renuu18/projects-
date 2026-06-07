function getWeather(){

    let city = document.getElementById("city").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    document.getElementById("cityName").innerText = city;

    let temperatures = [
        "22°C",
        "25°C",
        "28°C",
        "30°C",
        "32°C"
    ];

    let conditions = [
        "Sunny ☀️",
        "Cloudy ☁️",
        "Rainy 🌧️",
        "Stormy ⛈️",
        "Windy 🌬️"
    ];

    let randomTemp =
        temperatures[Math.floor(Math.random()*temperatures.length)];

    let randomCondition =
        conditions[Math.floor(Math.random()*conditions.length)];

    document.getElementById("temp").innerText = randomTemp;

    document.getElementById("condition").innerText = randomCondition;
}