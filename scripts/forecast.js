class Forecast {
    constructor() {
        this.key = "qAbwxpUG1d5BMxe3WtRl923DsBLI9UPP";  // api key - if requests gets to limit, open a new "app" and replace the key.
        this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1/";
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.forecast12hoursURI = "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/";
        this.forecast5daysURI = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
    }
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        const forecast12Hours = await this.getForecast12hours(cityDets.Key);
        const forecast5Days = await this.getForecast5days(cityDets.Key);

        return { cityDets, weather, forecast12Hours, forecast5Days };
    };
    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        return data[0];
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        return data[0];
    }
    async getForecast12hours(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.forecast12hoursURI + query);
        const data = await response.json();

        return data;
    }
    async getForecast5days(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.forecast5daysURI + query);
        const data = await response.json();

        return data;
    }
};