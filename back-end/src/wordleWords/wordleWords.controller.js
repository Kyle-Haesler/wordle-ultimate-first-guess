// objective - take list of all words, scrape internet page to get used words, compare lists, perform calculation on final list

// get list of all words
const allWordsList = require("../data/allWordsList")
// get function that calculates the best start word
const UltimateFirstGuess = require("../utilities/UltimateFirstGuess")
// get axios and cheerio for webscraping
const axios = require('axios');
const cheerio = require('cheerio');

// function that scrapes, compares and calculates
async function list(req, res, next) {
  const url = 'https://www.rockpapershotgun.com/wordle-past-answers'; 
const usedWords = [];

try {
  // scrape and push into usedWords array
  const response = await axios.get(url)
  const $ = await cheerio.load(response.data);
  $('ul.inline li').each((index, element) => {
    usedWords.push($(element).text().trim().toLowerCase());
  });
  // compare usedWords to all words to get final list
  const validWords = []
  for(let i = 0; i < allWordsList.length; i++){
    if(!usedWords.includes(allWordsList[i])){
      validWords.push(allWordsList[i])
    }
  }
  // run function with final words list
    const finalWord = UltimateFirstGuess(validWords);
    res.json({ data: finalWord });
} catch(error){
  next({
    status: 400,
    message: `${error}`
  })
}

}

module.exports = {
  list,
};
