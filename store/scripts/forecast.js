// Update this URL to your API call URL to openweather
const LAT = 40.77051398427372;
const LON = -111.89241577905543;
const APIKEY = "9129198d93df57a794c93802edd9aa74";
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

const ONE_DAY = 24 * 60 * 60 * 1000

function showCurrentTimeForecast(forecasts){
  const weatherElt = document.querySelector("#forecast")
  // Get the current time from the first element
  const timenow = forecasts[0].dt_txt.slice(11, 19) 

  // Build a new list of temp forecasts with the same time
  let temps = forecasts.filter(x => x.dt_txt.indexOf(timenow) != -1)

  // Output the next three days temperatures
  for (let i=1; i <= 3; i++){
    let newsection = document.createElement("section");    
    let mydate = temps[i].dt_txt.slice(5, 10)
    let icon = temps[i].weather[0].icon
    newsection.innerHTML = `<p>${mydate}</p>
    <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather"></p>
    <p>${temps[i].main.temp.toFixed(0)}&deg;F</p>`
    weatherElt.append(newsection)
  }
  
}

async function fetchForecast() {
    try {
      const response = await fetch(weatherURL);
      if (response.ok) {
        const data = await response.json();        
        showCurrentTimeForecast(data.list);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }

fetchForecast()