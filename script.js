if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lon = position.coords.longitude;
    var lat = position.coords.latitude;
  });
}

$(document).ready(function() {
  $.ajax ({
    url: "http://api.openweathermap.org/data/2.5/weather?lat=6.5232765&lon=3.5407909&units=metric&APPID=704c0ebd24062a42ed9ea3454a9dcd2d",
    dataType: "json",
    success: function(data) {
      var weather = data.weather[0].description;
      var tempCelsius = data.main.temp;
      var tempFahrenheit = (9/5 * tempCelsius) + 32;

      $("button").toggle(
        function() {$("#current-temp").html(tempFahrenheit + "°F")},
        function() {$("#current-temp").html(tempCelsius + "°C")}
      );

      console.log(data);
      $("#city").html(data.name + ", ");
      $("#country").html(data.sys.country);
      $("#current-temp").html(tempCelsius + "°C");
      $("#weather").html(weather);
      $("#wind").html(data.wind.speed + "m/s");

      if (weather == "few clouds") {
        $("#weather-icon").html("<img src='few_clouds.jpg'>");
      }
      if (weather == "broken clouds") {
        $("#weather-icon").html("<img src='broken_clouds.jpg'>");
      }

    }
  });
});
