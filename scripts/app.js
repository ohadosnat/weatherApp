// Main Content Elements
const body = document.querySelector('body');
const searchForm = document.querySelector('form');

const mainWrapper = document.querySelector('#mainWrapper');
const currentCondition = {
    countryName: document.querySelector('#countryName'),
    cityName: document.querySelector('#cityName'),
    weatherText: document.querySelector('#weatherText'),
    currentTemp: document.querySelector('#currentTemp'),
};
// Forecast Elements
const hourly12 = document.querySelector('#hoursItems');
const daily5 = document.querySelector('#dayItems');
const forecastWrapper = document.querySelector('#forecastWrapper');


// Update User Interface Function
const updateUI = async (data) => {

    // destructure properties
    const { cityDets, weather, forecast12Hours, forecast5Days } = data;

    // Current Condition Update
    currentCondition.countryName.innerText = cityDets.Country.EnglishName;
    currentCondition.cityName.innerText = cityDets.EnglishName;
    let currentTime = weather.LocalObservationDateTime.slice(11, 16);
    currentCondition.weatherText.innerHTML = `As for <span class="font-normal">${currentTime}</span> (local
        time), it’s <span class="font-normal">${weather.WeatherText}</span>`;
    currentCondition.currentTemp.innerHTML = `${weather.Temperature.Metric.Value}&deg;c`;
    mainWrapper.children[1].children[0].innerText = "";

    // Forecast Information Update

    forecastWrapper.classList.remove('hidden');
    mainWrapper.classList.remove('h-screen', "md:h-screen");

    // reset forecast elements
    hourly12.innerHTML = '';
    daily5.innerHTML = '';

    // checks if it's day or night
    let weatherIcon = "";

    if (weather.IsDayTime) {
        body.classList.remove('night');
        weatherIcon = "day/"
    } else {
        body.classList.add('night');
        weatherIcon = "night/"
    };

    // Generates forecast items
    // 12 Hours Forecast
    for (let i = 0; i < forecast12Hours.length; i++) {
        let tempInCelsius = tempToCelsius(forecast12Hours[i].Temperature.Value).toFixed(0);

        const html = `
                <div class="mr-4 text-base flex flex-col justify-center items-center lg:text-lg 2xl:mr-6">
                    <p class="">${forecast12Hours[i].DateTime.slice(11, 16)}</p>
                    <img src="css/icons/${weatherIcon}${forecast12Hours[i].WeatherIcon}.svg" alt="${weather.WeatherText}" class="h-12 fill-current text-skin-base">
                    <p class="time text-base lg:text-lg">${tempInCelsius}&deg;c</p>
                </div>
                `;

        hourly12.innerHTML += html;
    };

    // 5 Days Forecast
    for (let i = 0; i < forecast5Days.DailyForecasts.length; i++) {
        let tempAvg = (forecast5Days.DailyForecasts[i].Temperature.Maximum.Value + forecast5Days.DailyForecasts[i].Temperature.Minimum.Value) / 2;
        let tempInCelsius = tempToCelsius(tempAvg).toFixed(0);
        let day = new Date(forecast5Days.DailyForecasts[i].Date).toLocaleDateString('en-US', { weekday: 'long' });
        const html = `
            <div class="mr-4 text-base flex flex-col justify-center items-center lg:text-lg 2xl:mr-6">
                <p class="">${day}</p>
                <img src="css/icons/${weatherIcon}${forecast5Days[i].WeatherIcon}.svg" alt="${weather.WeatherText}" class="h-12 fill-current text-skin-base">
                <p class="time text-base lg:text-lg">${tempInCelsius}&deg;c</p>
            </div>`;

        daily5.innerHTML += html;
    };

};

// Fahrenheit to Celsius Function
const tempToCelsius = (temp) => {
    return (temp - 32) * 5 / 9;
};

// gets the city's weather information
const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    const forecast12Hours = await getForecast12hours(cityDets.Key);
    const forecast5Days = await getForecast5days(cityDets.Key);
    return { cityDets, weather, forecast12Hours, forecast5Days };
};

searchForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();

    // get city values
    const city = searchForm.city.value.trim();
    searchForm.reset();

    // update ui with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});
