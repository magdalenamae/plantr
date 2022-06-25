function getGeoLocationWeather() {
  KEY = `269c7bb4fd54e8339178e0ccf970b0aa`;
  const weatherContainer = document.getElementById("weather");
  const loadingMessage = document.createElement("p");
  loadingMessage.textContent = "Loading weather...";
  weatherContainer.replaceChildren(loadingMessage);
  if (navigator.geolocation) {
    //check if geolocation is available
    navigator.geolocation.getCurrentPosition(function (position) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${KEY}`
        )
        .then((response) => {
          const weatherDetails = document.createElement("div");
          weatherDetails.setAttribute('id', 'weather-details')
      
          const currentLocation = document.createElement("p");
          currentLocation.setAttribute('id', 'weather-details')
      
          const description = document.createElement("p");
          description.setAttribute('id', 'weather-details')
      
          description.textContent = response.data.weather[0].description;
          currentLocation.textContent = response.data.name;
      
          icon = response.data.weather[0].icon;
          const image = document.createElement("img");
          image.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
          const temp = document.createElement("p");
          const tempInDegree = Number(response.data.main.temp - 273.15).toFixed(0) + "°C";
          temp.textContent = tempInDegree;
          weatherDetails.append(temp, image, description, currentLocation);
          weatherContainer.replaceChildren(weatherDetails);
        });
    });
  } else {
    console.log("geolocation is not supported");
  }
}
