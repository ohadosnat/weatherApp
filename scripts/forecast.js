const key = "qAbwxpUG1d5BMxe3WtRl923DsBLI9UPP"; // api key - if requests gets to limit, open a new "app" and replace the key.

const getWeather = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

const getForecast12hours = async (id) => {
    const base = "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data;
};
const getForecast5days = async (id) => {
    const base = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data;
};
