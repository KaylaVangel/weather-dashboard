var APIKey = "dc591a53f8e7a96b2703399147c86ba9"
let dailyWeather;



function displayWeather() {
    const weatherDisplay = document.getElementById("display");
    for(i=0; i < 6; i++) {
        const dw = dailyWeather[i];
        const el = document.createElement("div");
            var date = new Date(dw.dt * 1000);
            var temp = dw.temp.day + "deg F";
            var wind = dw.wind_speed + "MPH"; 
            var humidity = dw.humidity + "%";
        el.innerText = date + temp + wind + humidity;

        if (i==0) {
            el.setAttribute("class", "current")
        }else {
            el.setAttribute ("class", "forcast")
        }

        weatherDisplay.appendChild(el)

    };
}



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
                fetch(getWeather).then(function (response) {
                    // request was successful
                    if (response.ok) {
                        response.json().then(function (data) {
                            dailyWeather = data.daily;
                            displayWeather();
                            // console.log(data);
                        });
                    }
                    
                })
            });
        }
       


       
    })


};