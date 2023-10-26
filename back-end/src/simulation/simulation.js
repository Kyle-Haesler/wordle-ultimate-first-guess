const allWordsList = require("../data/allWordsList")
const UltimateFirstGuess = require("../utilities/UltimateFirstGuess")

// Objective: simulate a full round of wordle playing with our calculated start word
function simulation(){
// establish starting valid words and used words
const validWords = [...allWordsList]
// establish length all words
const roundLength = allWordsList.length
// establish guess count that will count how many letters our guess got right
let guessCount = 0
// run a while loop to simulate each round of wordle
while(validWords.length >= 1){
    // select random word as solution
    let wordOfDay = validWords[Math.floor(Math.random() * validWords.length)]
    // produce our guess word
    let ourGuess = UltimateFirstGuess(validWords)
    // compare how many letters, yellow our green we got
    for(let i = 0; i < ourGuess.length; i++){
        if(wordOfDay.includes(ourGuess[i])){
            guessCount = guessCount + 1
        }
    }
    // remove word of day from valid words
    let indexToRemove = validWords.findIndex(word => word === wordOfDay)
    validWords.splice(indexToRemove, 1)


}
return guessCount / roundLength
}

// Objective: run the simulation n number of times and take the average of that amount
function runSimulation(n){
    let guessCount = 0
    let runTimes = n
    while(runTimes >=1){
        guessCount = guessCount + simulation()
        runTimes = runTimes - 1
    }
    return guessCount / n
    
}
// after 10 rounds, our average is 1.7820734

