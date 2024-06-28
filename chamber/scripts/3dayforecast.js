
// Update this URL to your API call URL to openweather
 
// const weatherURL = "./data/3dayweather.json"
// const LAT = 43.887093;
// const LON = -111.6682194;
// const APIKEY = "GET YOUR OWN KEY!!!";
const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=37.164697075587334&lon=-93.68352798281093&appid=9129198d93df57a794c93802edd9aa74&units=imperial";

const ONE_DAY = 24 * 60 * 60 * 1000

function showHighLowForecast(forecasts){
    // Get dates for next three days
    console.log(forecasts);
    let dates = []
    let mydate = new Date();
    for (let i=0; i < 3; i++){
        mydate = new Date(mydate.getTime() + ONE_DAY)
        let nextdate = mydate.toISOString().slice(0, 10)
        dates.push(nextdate)
    }
    console.log(dates)
    
    // Find the object with the highest temperature for each day
    const highTemps = dates.map((date) => forecasts        
        .filter(x => x.dt_txt.startsWith(date))
        .reduce((currentObj, highObj) => currentObj.main.temp > highObj.main.temp ? currentObj : highObj)
    )    

    // Find the object with the lowest temperature for each day
    const lowTemps = dates.map((date) => forecasts
        .filter(x => x.dt_txt.startsWith(date))
        .reduce((currentObj, lowObj) => currentObj.main.temp < lowObj.main.temp ? currentObj : lowObj)        
    )
    
    console.log(highTemps)
    console.log(lowTemps)

    // Add the forecast information to the HTML document
   
    const weatherElt = document.querySelector(".weather-card")
    // const weatherIcon = document.querySelector(".icon")
    for (let i=0; i < 3; i++){
        let newsection = document.createElement("section");
        newsection.innerHTML = `<h2>${dates[i]}</h2><p>Low: ${lowTemps[i].main.temp.toFixed(0)}&deg; High: ${highTemps[i].main.temp.toFixed(0)}&deg;</p>
        <p>Humidity: ${highTemps[i].main.humidity}</p>
        <p>Condition: ${highTemps[i].weather[0].main}</p>`
        weatherElt.append(newsection)
    }
    // weatherIcon.setAttribute("src","https://openweathermap.org/img/wn/"+lowTemps[i].weather[0].icon+".png");
    
}

function showCurrentTimeForecast(forecasts){
  const weatherElt = document.querySelector(".weather-card")
  // Get the current time from the first element
  const timenow = forecasts[0].dt_txt.slice(11, 19) 

  // Build a new list of temp forecasts with the same time
  let temps = forecasts.filter(x => x.dt_txt.indexOf(timenow) != -1)

  // Output the next three days temperatures
  for (let i=1; i <= 3; i++){
    let newsection = document.createElement("section");
    let mydate = temps[i].dt_txt.slice(0, 10)
    newsection.innerHTML = `<h3>${mydate}</h3>Tempurature: ${temps[i].main.temp} </p>
    <p>Humidity: ${temps[i].main.humidity}</p>
    <p>Condition: ${temps[i].weather[0].main}</p>`
    weatherElt.append(newsection)
  }
  
}

async function fetchForecast() {
    try {
      const response = await fetch(weatherURL);
      if (response.ok) {
        const data = await response.json();        
        showHighLowForecast(data.list);
        // showCurrentTimeForecast(data.list);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }

fetchForecast()

// @ ${timenow}

/* <p>Low: ${temps[i].main.temp_min}&deg;F High: ${temps[i].main.temp_max}&deg;F */