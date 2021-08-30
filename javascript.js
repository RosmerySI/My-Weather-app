let temp = document.getElementById("temp");
let three = document.getElementById("three");
let date = document.getElementById("date");
let today = document.getElementById("today");
let tomorrow = document.getElementById("tomorrow");
let after = document.getElementById("after");
let last = document.getElementById("last");
let bar = document.getElementById("input");
let city = document.getElementById("city");

let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");

let first = document.getElementsByClassName("first");

let cityGeo;
let celsiusTemp;
let conditionText;

let months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dicember");
let daysWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
let f = new Date();
date.innerHTML = `<div id="textDate" ><b>${(daysWeek[f.getDay()] + ", " + f.getDate() + " " + months[f.getMonth()])}</b></div>`
today.innerHTML = `<div id = "date1"><b>${(f.getDate() + " " + months[f.getMonth()])}</b></div>`
tomorrow.innerHTML = `<div id = "date2" ><b>${(f.getDate() + 1 + " " + months[f.getMonth()])}</b></div>`
after.innerHTML = `<div id = "date3" ><b>${(f.getDate() + 2 + " " + months[f.getMonth()])}</b></div>`
let h = f.getHours();





async function init(){ 
  
  const request = new Request("https://api.weatherapi.com/v1/forecast.json?key=eb573d1d20ff4955b6a20740210408&q=Cuba&days=3&aqi=no&alerts=no");
     fetch(request)
       .then(response => {
         if (response.status === 200) {
           return response.json();
   
         } else {
           throw new Error('Something went wrong on api server!');
         }
       })
       .then(response => {
   
         let current = response.current;
         let forecast = response.forecast;
         console.log(current);
         console.log(forecast);
         $("#city").html(`Cubans House`)
         $("#temp").html(`<div><p onclick="grados()" id="number">${Math.round(current.temp_c)}<div id= "grado"> </div> <div><p class="hide" id="number2">${Math.round(current.temp_f)} </div> <div id="condition">${current.condition.text} </div></p> <div><img id = "icon"src = "https:${current.condition.icon}"></div></div>`)
         $("#three").html(`<div id="whv"><div><span id = "wind"><b>${current.wind_kph}km/h</b> </br><span class="wind">Wind </span></span></div> <div><span id="humidity"><b>${current.humidity}%</b> </br><span class="humidity">Humidity </span></span></div> <div> <span id="visibility"><b>${current.vis_km}km </b></br><span class="visibility">Visisbility </span></span></div></div>`)
         $("#day1").html(`<div><div id = "temp1">${Math.round(forecast.forecastday[0].hour[h].temp_c)}<div class = "grado"></div></div><div ><img id ="icon1" src="https:${forecast.forecastday[0].hour[h].condition.icon}"></div></div>`)
         $("#day2").html(`<div><div id = "temp2">${Math.round(forecast.forecastday[1].hour[h].temp_c)}<div class = "grado1"></div></div><div ><img id ="icon2" src="https:${forecast.forecastday[1].hour[h].condition.icon}"></div></div>`)
         $("#day3").html(`<div><div id = "temp3">${Math.round(forecast.forecastday[2].hour[h].temp_c)}<div class = "grado"></div></div><div ><img  id ="icon3" src="https:${forecast.forecastday[2].hour[h].condition.icon}"></div></div>`)
         
       }).catch(error => {
         console.error(error);
       });

  

  function geo() {
    try{
    navigator.geolocation.getCurrentPosition(successfulLookup, onError);
    
    }catch{
     if (!navigator.geolocation) {
      
      swal({
        icon: 'error',
        title: 'Failed to get your location!',
        text: `Your browser doesn't support Geolocation`
      })
      swal.close();
    }
    
  
   
    }
   };
  function onError() {
    message.classList.add('error');
    message.textContent = `Failed to get your location!`;
    swal({
                    icon: 'error',
                    title: 'Failed to get your location!',
                    text: 'You must enable your localization in your browser'

                })
    swal.close();
    
  } 
  
  const  successfulLookup = (position) => {
    const {
      latitude,
      longitude
    } = position.coords;
    fetch (`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=20cc2ef35c0e4c3783662bb5330a6a39`)
     .then (response => response.json())
     .then(response => {
     console.log(response)
     cityGeo = response.results[0].components.city;
     
     const request = new Request("https://api.weatherapi.com/v1/forecast.json?key=eb573d1d20ff4955b6a20740210408&q=" + cityGeo + "&days=3&aqi=no&alerts=no");
     fetch(request)
       .then(response => {
         if (response.status === 200) {
           return response.json();
   
         } else {
           throw new Error('Something went wrong on api server!');
         }
       })
       .then(response => {
   
         let current = response.current;
         let forecast = response.forecast;
         console.log(current);
         console.log(forecast);
         city.innerHTML = `${cityGeo}`
         temp.innerHTML = `<div><p onclick="grados()" id="number">${Math.round(current.temp_c)}<div id= "grado"> </div> <div><p class="hide" id="number2">${Math.round(current.temp_f)} </div> <div id="condition">${current.condition.text} </div></p> <div><img id = "icon"src = "https:${current.condition.icon}"></div></div>`
         three.innerHTML = `<div id="whv"><div><span id = "wind"><b>${current.wind_kph}km/h</b> </br><span class="wind">Wind </span></span></div> <div><span id="humidity"><b>${current.humidity}%</b> </br><span class="humidity">Humidity </span></span></div> <div> <span id="visibility"><b>${current.vis_km}km </b></br><span class="visibility">Visisbility </span></span></div></div>`
         day1.innerHTML = `<div><div  id = "temp1">${Math.round(forecast.forecastday[0].hour[h].temp_c)}<div class = "grado"></div></div><div ><img id ="icon1" src="https:${forecast.forecastday[0].hour[h].condition.icon}"></div></div>`
         day2.innerHTML = `<div><div  id = "temp2">${Math.round(forecast.forecastday[1].hour[h].temp_c)}<div class = "grado1"></div></div><div ><img id ="icon2" src="https:${forecast.forecastday[1].hour[h].condition.icon}"></div></div>`
         day3.innerHTML = `<div><div id = "temp3">${Math.round(forecast.forecastday[2].hour[h].temp_c)}<div class = "grado"></div></div><div ><img  id ="icon3" src="https:${forecast.forecastday[2].hour[h].condition.icon}"></div></div>`
         celsiusTemp = Math.round(current.temp_c);
         conditionText = current.condition.text;         
       }).catch(error => {
         console.error(error);
       });

    }).catch(error => {
      console.error(error);
    });    
  }
  
  geo(); 
  date();
}


function grados(){
  
  let celsius = document.getElementById("number");  
  let farenheit = document.getElementById("number2");
  if (celsius.innerHTML !== farenheit.innerHTML){
    console.log(celsius.innerHTML);
    celsius.innerHTML = farenheit.innerHTML;
    stormyWords(conditionText);
    rainyWords(conditionText);
    sunnyWords(conditionText);
    foggyWords(conditionText);
    
  }else{
    celsius.innerHTML = celsiusTemp;
    myMusicSun.pause();
    myMusicRain.pause();
    myMusicFog.pause();
    myMusicThunder.pause();
  }  
}
function chgToday(){
  
  let iconCurrent = document.getElementById("icon");
  let iconToday = document.getElementById("icon1"); 
  let tmpToday = document.getElementById("temp1");  
  let celsius = document.getElementById("number"); 
  celsius.innerHTML = tmpToday.innerHTML;
  iconCurrent.src =  iconToday.src;  
}
function chgTomorrow(){
  
  let iconCurrent = document.getElementById("icon");
  let iconTomorrow = document.getElementById("icon2"); 
  let tmpTomorrow = document.getElementById("temp2");    
  let celsius = document.getElementById("number"); 
  celsius.innerHTML = tmpTomorrow.innerHTML; 
  iconCurrent.src =  iconTomorrow.src;  
}
function chgAfter(){
  
  let iconCurrent = document.getElementById("icon");
  let iconAfter = document.getElementById("icon3");
  let tmpAfter = document.getElementById("temp3");  
  let celsius = document.getElementById("number"); 
  celsius.innerHTML = tmpAfter.innerHTML; 
  iconCurrent.src =  iconAfter.src;  
}


async function findWeather() {
  let cityName = bar.value;
  console.log(cityName);
  const request = new Request("https://api.weatherapi.com/v1/forecast.json?key=eb573d1d20ff4955b6a20740210408&q=" + cityName + "&days=3&aqi=no&alerts=no");
  await fetch(request)
    .then(response => {
      if (response.status === 200) {
        return response.json();

      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then(response => {

      let current = response.current;
      let forecast = response.forecast;
      console.log(current);
      console.log(forecast);
      city.innerHTML = `${cityName}`;
      temp.innerHTML = `<div><p onclick="grados()" id="number">${Math.round(current.temp_c)}<div id= "grado"> </div> <div><p class="hide" id="number2">${Math.round(current.temp_f)} </div> <div id="condition">${current.condition.text} </div></p> <div><img id = "icon"src = "https:${current.condition.icon}"></div></div>`
      three.innerHTML = `<div id="whv"><div><span id = "wind"><b>${current.wind_kph}km/h</b> </br><span class="wind">Wind </span></span></div> <div><span id="humidity"><b>${current.humidity}%</b> </br><span class="humidity">Humidity </span></span></div> <div> <span id="visibility"><b>${current.vis_km}km </b></br><span class="visibility">Visisbility </span></span></div></div>`
      day1.innerHTML = `<div><div id = "temp1">${Math.round(forecast.forecastday[0].hour[h].temp_c)}<div class = "grado"></div></div><div ><img id ="icon1" src="https:${forecast.forecastday[0].hour[h].condition.icon}"></div></div>`
      day2.innerHTML = `<div><div id = "temp2">${Math.round(forecast.forecastday[1].hour[h].temp_c)}<div class = "grado1"></div></div><div ><img id ="icon2" src="https:${forecast.forecastday[1].hour[h].condition.icon}"></div></div>`
      day3.innerHTML = `<div><div id = "temp3">${Math.round(forecast.forecastday[2].hour[h].temp_c)}<div class = "grado"></div> </div><div ><img id ="icon3" src="https:${forecast.forecastday[2].hour[h].condition.icon}"></div></div>`
      celsiusTemp = Math.round(current.temp_c);
      conditionText = current.condition.text;
      stormyWords(conditionText);
      rainyWords(conditionText);
      sunnyWords(conditionText);
      foggyWords(conditionText);
    }).catch(error => {
      console.error(error);
    });
   

}
let buttonChange = document.getElementById('switch_label');

buttonChange.onclick = function (e) {
  e.preventDefault
  
  document.body.classList.toggle('dark_theme')
}

$(document).keypress(function (event) {
  var keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode == "13") {
    findWeather();
  }
});


function hideInput() {
  $(".first").toggleClass("hide");
}

let myMusicRain = document.getElementById("musicRain");  
function playRain() {
      
  myMusicRain.play();  
  }
  let myMusicThunder = document.getElementById("musicThunder");  
  function playThunder() {
        
    myMusicThunder.play();  
    }
let myMusicFog = document.getElementById("musicFog");  
function playFog() {
      
  myMusicFog.play();  
  }
let myMusicSun = document.getElementById("musicSun");  
function playBirds() {
      
  myMusicSun.play();  
  }

  
  
  