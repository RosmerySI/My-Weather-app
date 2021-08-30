let sunny = [
    "Sun",
    "Sunny",
    "Clear",
]

function sunnyWords(conditionText) {
    for(let j = 0; j < sunny.length; j++){
            if(conditionText == sunny[j]){
                playBirds();
            }
        }
    }
