const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f926b50d8cmsh508da8bf33cb9dbp166b41jsn24ff1c1bcf8f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

   

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {


            cityName.innerHTML=city;
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed


        })
        .catch(err => console.error(err));

}
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);.0
})
getWeather("Delhi");

// const cities=["Delhi","Mumbai","Dehradun","New York","London"];

// cities.forEach(getCityWeather);

const getWeatherDelhi = () => {

    // cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
        .then(response => response.json())
        .then(response => {
            DelhiFeels_like.innerHTML = response.feels_like
            DelhiHumidity.innerHTML = response.humidity
            DelhiMax_temp.innerHTML = response.max_temp
            DelhiMin_temp.innerHTML = response.min_temp
            DelhiSunrise.innerHTML = response.sunrise
            DelhiSunset.innerHTML = response.sunset
            DelhiTemp.innerHTML = response.temp
            DelhiWind_degrees.innerHTML = response.wind_degrees
            DelhiWind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));

}
const getWeatherMumbai = () => {

    // cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
        .then(response => response.json())
        .then(response => {
            MumbaiFeels_like.innerHTML = response.feels_like
            MumbaiHumidity.innerHTML = response.humidity
            MumbaiMax_temp.innerHTML = response.max_temp
            MumbaiMin_temp.innerHTML = response.min_temp
            MumbaiSunrise.innerHTML = response.sunrise
            MumbaiSunset.innerHTML = response.sunset
            MumbaiTemp.innerHTML = response.temp
            MumbaiWind_degrees.innerHTML = response.wind_degrees
            MumbaiWind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
const getWeatherDehradun = () => {

    // cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dehradun', options)
        .then(response => response.json())
        .then(response => {
            DehradunFeels_like.innerHTML = response.feels_like
            DehradunHumidity.innerHTML = response.humidity
            DehradunMax_temp.innerHTML = response.max_temp
            DehradunMin_temp.innerHTML = response.min_temp
            DehradunSunrise.innerHTML = response.sunrise
            DehradunSunset.innerHTML = response.sunset
            DehradunTemp.innerHTML = response.temp
            DehradunWind_degrees.innerHTML = response.wind_degrees
            DehradunWind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
const getWeatherKolkata = () => {

    // cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
        .then(response => response.json())
        .then(response => {
            KolkataFeels_like.innerHTML = response.feels_like
            KolkataHumidity.innerHTML = response.humidity
            KolkataMax_temp.innerHTML = response.max_temp
            KolkataMin_temp.innerHTML = response.min_temp
            KolkataSunrise.innerHTML = response.sunrise
            KolkataSunset.innerHTML = response.sunset
            KolkataTemp.innerHTML = response.temp
            KolkataWind_degrees.innerHTML = response.wind_degrees
            KolkataWind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

getWeatherDehradun();
getWeatherKolkata();
getWeatherDelhi();
getWeatherMumbai();