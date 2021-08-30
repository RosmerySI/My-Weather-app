let foggy = [
    "Cloudy",
    "Overcast",
    "Mist",
    "Patchy snow possible",
    "Patchy sleet possible",
    "Patchy freezing drizzle possible",
    "Thundery outbreaks possible",
    "Blowing snow",
    "Blizzard",
    "Fog",
    "Freezing fog",
    "Patchy light drizzle",
    "Light drizzle",
    "Freezing drizzle",
    "Heavy freezing drizzle",
    "Patchy moderate snow",
    "Moderate snow",
    "Patchy heavy snow",
    "Heavy snow",
    "Ice pellets",
    "Partly cloudy",
];

function foggyWords(conditionText) {
       for(let j = 0; j < foggy.length; j++){
            if(conditionText == foggy[j]){
                playFog();
            }
        }
    
}