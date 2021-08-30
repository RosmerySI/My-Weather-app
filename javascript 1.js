let temp = document.getElementById("temp");
let three = document.getElementById("three");
let secondA = document.getElementById("secondA");
let secondB = document.getElementById("secondB");
let secondC = document.getElementById("secondC");

let temp1 = document.getElementById("temp1");
let three1 = document.getElementById("three1");
let second1 = document.getElementById("second1");

let temp2 = document.getElementById("temp2");
let three2 = document.getElementById("three2");
let second2 = document.getElementById("second2");

let f = new Date();
let h = f.getHours();
let datasHours = [];
let datasIcons = [];
let datasConditions = [];
let datasMax = [];
let datasMin = [];
let datasCurrentTemp = [];
let datasCurrentTemp1 = [];
let datasCurrentTemp2 = [];
let datasWind = [];
let datasHumidity = [];
let datasVisibility = [];
let datasWind1 = [];
let datasHumidity1 = [];
let datasVisibility1 = [];
let datasWind2 = [];
let datasHumidity2 = [];
let datasVisibility2  = [];



let wholeDatasHours = [];
let wholeDatasIcons = [];
let wholeDatasConditions = [];
let wholeDatasMax = [];
let wholeDatasMin = [];

let wholeDatasHours1 = [];
let wholeDatasIcons1 = [];
let wholeDatasConditions1 = [];
let wholeDatasMax1 = [];
let wholeDatasMin1 = [];



async function init(){

  const request = new Request("https://api.weatherapi.com/v1/forecast.json?key=eb573d1d20ff4955b6a20740210408&q=Guadalajara&days=3&aqi=no&alerts=no");
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
    temp.innerHTML = `<div id="content"><p id="number">${Math.round(current.temp_c)}<div id= "grado"> </div> <div><p onclick="grados2()" class="hide" id="number2">${Math.round(current.temp_f)}<div class="hide" id= "grado2"></div> <div id="condition">${current.condition.text} </div></p> <div><img id = "icon"src = "https:${current.condition.icon}"></div></div>`
    three.innerHTML = `<div id="whv"><div><span id = "wind"><b>${current.wind_kph}km/h</b> </br><span class="wind">Wind </span></span></div> <div><span id="humidity"><b>${current.humidity}%</b> </br><span class="humidity">Humidity </span></span></div> <div> <span id="visibility"><b>${current.vis_km}km </b></br><span class="visibility">Visisbility </span></span></div></div>`
    temp1.innerHTML = `<div id="info1"><p id="number1">${Math.round(forecast.forecastday[1].day.avgtemp_c)}<div id= "grado1"> </div> <div id="condition1">${forecast.forecastday[1].day.condition.text} </div></p> <div><img id = "icon1"src = "https:${forecast.forecastday[1].day.condition.icon}"></div></div>`
    three1.innerHTML = `<div id="whv1"><div><span id = "wind1"><b>${current.wind_kph}km/h</b> </br><span class="wind">Wind </span></span></div> <div><span id="humidity1"><b>${current.humidity}%</b> </br><span class="humidity">Humidity </span></span></div> <div> <span id="visibility1"><b>${current.vis_km}km </b></br><span class="visibility">Visisbility </span></span></div></div>`
    temp2.innerHTML = `<div id="info2"><p id="number2">${Math.round(forecast.forecastday[2].day.avgtemp_c)}<div id= "grado2"> </div> <div id="condition2">${forecast.forecastday[2].day.condition.text} </div></p> <div><img id = "icon2"src = "https:${forecast.forecastday[2].day.condition.icon}"></div></div>`
    three2.innerHTML = `<div id="whv2"><div><span id = "wind2"><b>${current.wind_kph}km/h</b> </br><span class="wind">Wind </span></span></div> <div><span id="humidity2"><b>${current.humidity}%</b> </br><span class="humidity">Humidity </span></span></div> <div> <span id="visibility2"><b>${current.vis_km}km </b></br><span class="visibility">Visisbility </span></span></div></div>`
    
     do {
      datasHours.push(forecast.forecastday[0].hour[h].time.slice(11,17));
      datasIcons.push(forecast.forecastday[0].hour[h].condition.icon);
      datasConditions.push(forecast.forecastday[0].hour[h].condition.text);
      datasMax.push(forecast.forecastday[0].day.maxtemp_c);
      datasMin.push(forecast.forecastday[0].day.mintemp_c);
      datasCurrentTemp.push(forecast.forecastday[0].hour[h].temp_c);
      datasHumidity.push(forecast.forecastday[0].hour[h].humidity);
      datasVisibility.push(forecast.forecastday[0].hour[h].vis_km);
      datasWind.push(forecast.forecastday[0].hour[h].wind_kph);
      h++;
     } while (h < 24);
     for (let i = 0; i < datasHours.length; i++){
       let table = document.getElementById("myTable");
       let row = `<tr>
          <td class="hours" >${datasHours[i]}</td>
          <td class="dataIconsContainer" ><img id="dataIcons" src="https:${datasIcons[i]}"></td>
          <td class="dataConditions">${datasConditions[i]}</td>
          <td class="dataMaxMin">${Math.round(datasMax[i])}/${Math.round(datasMin[i])}</td>
                  </tr>`
        table.innerHTML += row; 
        
      }
      for (let i = 0; i < 24; i++){
        let table1 = document.getElementById("myTable1");
        wholeDatasHours.push(forecast.forecastday[1].hour[i].time.slice(11,17));
        wholeDatasIcons.push(forecast.forecastday[1].hour[i].condition.icon);
        wholeDatasConditions.push(forecast.forecastday[1].hour[i].condition.text);
        wholeDatasMax.push(forecast.forecastday[1].day.maxtemp_c);
        wholeDatasMin.push(forecast.forecastday[1].day.mintemp_c);
        datasHumidity1.push(forecast.forecastday[1].hour[i].humidity);
        datasVisibility1.push(forecast.forecastday[1].hour[i].vis_km);
        datasWind1.push(forecast.forecastday[1].hour[i].wind_kph);
        datasCurrentTemp1.push(forecast.forecastday[1].hour[i].temp_c);

        let row1 = `<tr>
          <td class="hours" >${wholeDatasHours[i]}</td>
          <td class="dataIconsContainer" ><img id="dataIcons" src="https:${wholeDatasIcons[i]}"></td>
          <td class="dataConditions">${wholeDatasConditions[i]}</td>
          <td class="dataMaxMin">${Math.round(wholeDatasMax[i])}/${Math.round(wholeDatasMin[i])}</td>
                   </tr>`
         table1.innerHTML += row1;           
       
      }
      for (let i = 0; i < 24; i++){
        let table2 = document.getElementById("myTable2");
        wholeDatasHours1.push(forecast.forecastday[2].hour[i].time.slice(11,17));
        wholeDatasIcons1.push(forecast.forecastday[2].hour[i].condition.icon);
        wholeDatasConditions1.push(forecast.forecastday[2].hour[i].condition.text);
        wholeDatasMax1.push(forecast.forecastday[2].day.maxtemp_c);
        wholeDatasMin1.push(forecast.forecastday[2].day.mintemp_c);
        datasHumidity2.push(forecast.forecastday[2].hour[i].humidity);
        datasVisibility2.push(forecast.forecastday[2].hour[i].vis_km);
        datasWind2.push(forecast.forecastday[2].hour[i].wind_kph);
        datasCurrentTemp2.push(forecast.forecastday[2].hour[i].temp_c);
        let row2 = `<tr>
          <td class="hours" >${wholeDatasHours1[i]}</td>
          <td class="dataIconsContainer" ><img id="dataIcons" src="https:${wholeDatasIcons1[i]}"></td>
          <td class="dataConditions">${wholeDatasConditions1[i]}</td>
          <td class="dataMaxMin">${Math.round(wholeDatasMax1[i])}/${Math.round(wholeDatasMin1[i])}</td>
                     </tr>`
           table2.innerHTML += row2;           
         
          }
          let ctx = document.getElementById('myChart').getContext('2d');
           myChart = new Chart(ctx, {
            type: 'line',
            
            data: {
                //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                labels: datasHours,
                datasets: [{
                    label: 'Temperature per hour',
                    //data: [12, 19, 3, 5, 2, 3],
                    data: datasCurrentTemp,
                    cubicInterpolationMode:"monotone",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                   
                }]
            },
            const: tooltipFooter = (tooltipItems) => {
              let tooltipHumidity = [];
              let tooltipVisibility = [];
              let tooltipWind = [];
              let tooltipConditions = [];
              let tooltipIcons = [];
              tooltipItems.forEach(function (Items) {
                tooltipConditions = datasConditions[Items.dataIndex];
                tooltipHumidity = datasHumidity[Items.dataIndex];
                tooltipVisibility = datasVisibility[Items.dataIndex];
                tooltipWind = datasWind[Items.dataIndex];
                tooltipIcons = datasIcons[Items.dataIndex];
              });
              return "Condition: " + tooltipConditions +
                      "\nHumudity: " + tooltipHumidity +  "%" +
                      "\nVisibility: " + tooltipVisibility + "km" +
                      "\nWind: " + tooltipWind + "km/h" ; 
                      

            },
            options: {
                  
               scales: {
                    y: {
                        beginAtZero: true
                    }
                },
              plugins: {
                  tooltip: {
                    yAlign:'bottom',
                    displayColors: false,
                    callbacks: {
                      footer: tooltipFooter 

                    }
                  } 
                  
              } 
                     
            }
        });
        let ctx1 = document.getElementById('myChart1').getContext('2d');
           myChart1 = new Chart(ctx1, {
            type: 'line',
            
            data: {
               
                labels: wholeDatasHours,
                datasets: [{
                    label: 'Temperature per hour',
                    
                    data: datasCurrentTemp1,
                    cubicInterpolationMode:"monotone",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                   
                }]
            },
            const: tooltipFooter1 = (tooltipItems1) => {
              let tooltipHumidity1 = [];
              let tooltipVisibility1 = [];
              let tooltipWind1 = [];
              let tooltipConditions1 = [];
              let tooltipIcons = [];
              tooltipItems1.forEach(function (Items1) {
                tooltipConditions1 = wholeDatasConditions[Items1.dataIndex];
                tooltipHumidity1 = datasHumidity1[Items1.dataIndex];
                tooltipVisibility1 = datasVisibility1[Items1.dataIndex];
                tooltipWind1 = datasWind1[Items1.dataIndex];
                tooltipIcons = datasIcons[Items1.dataIndex];
              });
              return "Condition: " + tooltipConditions1 +
                      "\nHumudity: " + tooltipHumidity1 +  "%" +
                      "\nVisibility: " + tooltipVisibility1 + "km" +
                      "\nWind: " + tooltipWind1 + "km/h" ; 
                      

            },
            options: {
                  
               scales: {
                    y: {
                        beginAtZero: true
                    }
                },
              plugins: {
                  tooltip: {
                    yAlign:'bottom',
                    displayColors: false,
                    callbacks: {
                      footer: tooltipFooter1 

                    }
                  } 
                  
              } 
                     
            }
        });
        let ctx2 = document.getElementById('myChart2').getContext('2d');
           myChart2 = new Chart(ctx2, {
            type: 'line',
            
            data: {
               
                labels: wholeDatasHours1,
                datasets: [{
                    label: 'Temperature per hour',
                    
                    data: datasCurrentTemp2,
                    cubicInterpolationMode:"monotone",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                   
                }]
            },
            const: tooltipFooter2 = (tooltipItems2) => {
              let tooltipHumidity2 = [];
              let tooltipVisibility2 = [];
              let tooltipWind2 = [];
              let tooltipConditions2 = [];
              let tooltipIcons = [];
              tooltipItems2.forEach(function (Items2) {
                tooltipConditions2 = wholeDatasConditions1[Items2.dataIndex];
                tooltipHumidity2 = datasHumidity2[Items2.dataIndex];
                tooltipVisibility2 = datasVisibility2[Items2.dataIndex];
                tooltipWind2 = datasWind2[Items2.dataIndex];
                tooltipIcons = datasIcons[Items2.dataIndex];
              });
              return "Condition: " + tooltipConditions2 +
                      "\nHumudity: " + tooltipHumidity2 +  "%" +
                      "\nVisibility: " + tooltipVisibility2 + "km" +
                      "\nWind: " + tooltipWind2 + "km/h" ; 
                      

            },
            options: {
                  
               scales: {
                    y: {
                        beginAtZero: true
                    }
                },
              plugins: {
                  tooltip: {
                    yAlign:'bottom',
                    displayColors: false,
                    callbacks: {
                      footer: tooltipFooter2

                    }
                  } 
                  
              } 
                     
            }
        });
    }).catch(error => {
    console.error(error);
    alert("Something went wrong");
  });
       

 
} 
function grados(){
  let celsius = document.getElementById("number");
  let farenheit = document.getElementById("number2");
  let grado = document.getElementById("grado2");
  celsius.className = "hide";
  farenheit.className = "show";
  grado.className = "show";
}
function grados2(){
  let celsius = document.getElementById("number");
  let farenheit = document.getElementById("number2");  
  let grado = document.getElementById("grado2");
  celsius.className = "show";
  farenheit.className = "hide";
  grado.className = "hide";
}

let buttonChange = document.getElementById('switch_label');

 buttonChange.onclick = function(e){    
  e.preventDefault
  
  document.body.classList.toggle('dark_theme')
 }

 
  
 
