
function UltimateFirstGuess(validWords){
    // go through each word, make a count of each letter by way of a map
    const letterCount = new Map()
    for(let word of validWords){
        for(let letter of word){
            if(letterCount.has(letter)){
                letterCount.set(letter, letterCount.get(letter) + 1)
            } else {
                letterCount.set(letter, 1)
            }
        }
    }
    // go through each word, add word along with sum of its letters to a different map
    const wordScore = new Map()
    for(let word of validWords){
        const uniqueWordSet = new Set(word)
        const uniqueWord = [...uniqueWordSet].join("")
        let sum = 0
        for(let letter of uniqueWord){
            sum = sum + letterCount.get(letter)
        }
        wordScore.set(word, sum)
    }
    // sort and return highest scoring word
    const wordScoreArray = Array.from(wordScore, ([word, score]) => ({word, score}))
    wordScoreArray.sort((a, b) => b.score - a.score)
    const highestScoreWord = wordScoreArray[0].word
    return highestScoreWord
}

module.exports = UltimateFirstGuess