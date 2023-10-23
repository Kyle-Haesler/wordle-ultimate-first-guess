const allWordsList = require("../data/allWordsList")
const UltimateFirstGuess = require("../utilities/UltimateFirstGuess")

const axios = require('axios');
const cheerio = require('cheerio');


async function list(req, res, next) {
  const url = 'https://www.rockpapershotgun.com/wordle-past-answers'; 
const usedWords = [];

try {
  const response = await axios.get(url)
  const $ = await cheerio.load(response.data);
  $('ul.inline li').each((index, element) => {
    usedWords.push($(element).text().trim().toLowerCase());
  });
  const validWords = []
  for(let i = 0; i < allWordsList.length; i++){
    if(!usedWords.includes(allWordsList[i])){
      validWords.push(allWordsList[i])
    }
  }
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
