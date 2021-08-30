let infoWindow;

let current;

function look() {
    function geo() {
      navigator.geolocation.getCurrentPosition(successfulLookup, onError);
      console.log(cityGeo);
     };
     function onError() {
        // message.classList.add('error');
        // message.textContent = `Failed to get your location!`;
        swal({
          icon: 'error',
          title: 'Failed to get your location!',
          text: 'You must enable your localization in your browser'

      })
      swal.close();
      } 
     const  successfulLookup = (position) => {
         const{
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
      
            current = response.current;
            let forecast = response.forecast;
            console.log(current);
            console.log(forecast);
            temp = current.temp_c;
            // city.innerHTML = `${cityGeo}`
            // temp.innerHTML = `<div><p id="number">${Math.round(current.temp_c)}<div id= "grado"> </div> <div id="condition">${current.condition.text} </div></p> <div><img id = "icon"src = "https:${current.condition.icon}"></div></div>`
            // three.innerHTML = `<div id="whv"><div><span id = "wind"><b>${current.wind_kph}km/h</b> </br><span class="wind">Wind </span></span></div> <div><span id="humidity"><b>${current.humidity}%</b> </br><span class="humidity">Humidity </span></span></div> <div> <span id="visibility"><b>${current.vis_km}km </b></br><span class="visibility">Visisbility </span></span></div></div>`
            // day1.innerHTML = `<div><div id = "temp1">${Math.round(forecast.forecastday[0].hour[13].temp_c)}<div class = "grado"></div></div><div ><img id ="icon1" src="https:${forecast.forecastday[0].hour[13].condition.icon}"></div></div>`
            // day2.innerHTML = `<div><div id = "temp2">${Math.round(forecast.forecastday[1].hour[13].temp_c)}<div class = "grado1"></div></div><div ><img id ="icon2" src="https:${forecast.forecastday[1].hour[13].condition.icon}"></div></div>`
            // day3.innerHTML = `<div><div id = "temp3">${Math.round(forecast.forecastday[2].hour[13].temp_c)}<div class = "grado"></div></div><div ><img  id ="icon3" src="https:${forecast.forecastday[2].hour[0].condition.icon}"></div></div>`
            initMap(latitude, longitude);
          }).catch(error => {
            console.error(error);
          });
       console.log(response)
       
       });
    }
    function initMap(latitude, longitude){
        var options = {
                zoom:14,
                center:{lat:latitude,lng:longitude}
                }
                map = new google.maps.Map(document.getElementById('map'),options);
        marker = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(latitude,longitude), 
                icon: `https:${current.condition.icon}`,       
                });
        infoWindow = new google.maps.InfoWindow({
          content: `${current.condition.text}
          ${Math.round(current.temp_c)}°C-${Math.round(current.temp_f)}°F`
        });

        marker.addListener('click', toggleBounce);

    }
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
        infoWindow.close();
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        infoWindow.open(map, marker);
      }
    }
    
    geo();
}









 buttonChange.onclick = function(e){    
  e.preventDefault
  
  document.body.classList.toggle('dark_theme')
 }
  
 
