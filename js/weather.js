const city = document.querySelector('#weather span:first-child');
const weather = document.querySelector('#weather span:last-child');
const API_KEY = 'e019f2aadb68d043704347706432f0a5';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      city.innerText = data.name + ' / ';
      weather.innerHTML = `${data.weather[0].main} <span style='font-size:24px;font-weight:bold;'>${data.main.temp}</span> ℃`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
