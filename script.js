var APIKey = "dc591a53f8e7a96b2703399147c86ba9"


//button click function//
function search() {
     var cityName = document.getElementById("city").value
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey + "&units=imperial";
    console.log(queryURL);

    fetch(queryURL).then(function (response) {
        // request was successful
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            });
        }
        else {
            alert("There was a problem with your request!");
        }
    });
}