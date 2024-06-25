const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?lat=37.164725304017196&lon=-93.68350784852127&appid=9129198d93df57a794c93802edd9aa74&units=imperial"

const currentWeather = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weather-icon');


function displayResults(data){



    currentWeather.innerHTML = `${data.main.temp}&deg;F - ${data.weather[0].main}`; 
    
    weatherIcon.setAttribute("src","https://openweathermap.org/img/wn/"+data.weather[0].icon+".png");
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