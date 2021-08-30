let stormy = [
    "Patchy light rain",
    "Light rain",
    "Light freezing rain",
    "Moderate or heavy freezing rain",
    "Light sleet",
    "Moderate or heavy sleet",
    "Patchy light snow",
    "Light snow",
    "Light rain shower",
    "Moderate or heavy rain shower",
    "Torrential rain shower",
    "Light sleet showers",
    "Moderate or heavy sleet showers",
    "Light snow showers",
    "Moderate or heavy snow showers",
    "Light showers of ice pellets",
    "Moderate or heavy showers of ice pellets",
    "Patchy light rain with thunder",
    "Moderate or heavy rain with thunder",
    "Patchy light snow with thunder",
    "Moderate or heavy snow with thunder",
];

function stormyWords(conditionText) {
        for(let j = 0; j < stormy.length; j++){
                if(conditionText == stormy[j]){
                    playThunder();
                }
            }
}