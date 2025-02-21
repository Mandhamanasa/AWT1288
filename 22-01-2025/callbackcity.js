function fetchCityId(cityID, callback) {
    setTimeout(() => {
        const cityname="New York";
        callback(cityname);
    }, 1000);
}

function fetchCityWeather(cityname, callback) {
    setTimeout(() => {
        console.log(`fetch cityname: ${cityname}`);
        const weather = { cityname: cityname, temperature: 28, condition: 'sunny' }; // Use cityname here
        callback(weather);
    }, 1000);
}

function displayweather(weather) {
    console.log(`cityname: ${weather.cityname}`);
    console.log(`temperature: ${weather.temperature}`);
    console.log(`weather: ${weather.condition}`);
}

fetchCityId(101, (cityname) => {
    fetchCityWeather(cityname, displayweather);
});
