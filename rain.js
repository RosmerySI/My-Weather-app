let rainy = [
    "Patchy rain possible",
    "Moderate rain at times",
    "Moderate rain",
    "Heavy rain at times",
    "Heavy rain",
    
];

function rainyWords(conditionText) {
    for(let j = 0; j < rainy.length; j++){
            if(conditionText == rainy[j]){
                playRain();
            }
        }
    }