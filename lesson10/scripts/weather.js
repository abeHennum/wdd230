const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?lat=-45.129325149147405&lon=169.04868105533464&appid=9129198d93df57a794c93802edd9aa74&units=imperial"

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    captionDesc.innerText = data.weather[0].main;
    weatherIcon.setAttribute("src","https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");
}

async function apiFetch() {
    try {
      const response = await fetch(WEATHER_URL);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // testing only
        // displayResults(data); // uncomment when ready
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();