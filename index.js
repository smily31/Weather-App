/**
 * DONE: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the html file from respo
 */


// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


/**
 * Retrieve weather data from 
 * HINT: Use fetch()
 * HINT: URL should look like:  url?q=city&appid=apikey&units=imperial.
 */

getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    // HINT: Use template literals to create a url with input and an API key
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    // now use fetch() and return promise
    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response)=>{
        return response.json();     // by returning response.json it returns object 
    })
}

