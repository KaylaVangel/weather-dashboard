var APIKey = "dc591a53f8e7a96b2703399147c86ba9"
let dailyWeather;

//button click function//
function search() {
    const cityName = document.getElementById("city").value
    const getLatLong = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + APIKey;
    // console.log(getWeather);
    fetch(getLatLong).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                const lat = data[0].lat;
                const lon = data[0].lon;
                const getWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${APIKey}&units=imperial`;
                // console.log(data);
            });
        }
        else {
            alert("There was a problem with your request!");
        }


        fetch(getWeather).then(function (response) {
            // request was successful
            if (response.ok) {
                response.json().then(function (data) {
                    dailyWeather = data.daily;
                    displayWeather();
                    // console.log(data);
                });
            }
            else {
                alert("There was a problem with your request!");
            }
        }

  
}

function displayWeather(){

}