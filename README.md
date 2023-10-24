# Wordle Ultimate First Guess
Basic application that shows the user the best word to start with when playing Wordle
 
## Instructions
- run npm install
- run npm start:dev to run locally
- application is live at: https://wordle-ultimate-first-guess-client.onrender.com

## Methodology
Wordle has a list of words that could be solutions for any given day (A). Each day, a solution is provided. Thus, we have a list of all words used as solutions (B). If we subtract (B) from (A), we are left with all words that have the potential to be solutions (C).

With (C), we count the letter frequency of each letter of each word included in (C). With our tally of letter counts, we assign each word in (C) a score by summing each letter's frequency of each word.

We select the highest scoring word as our start word for each day. This start word gives you the highest probability of getting the most letters (yellow).

This will automatically calculate everytime you come to this site so be sure to give it a look before you play!

Used words list is acquired from: https://www.rockpapershotgun.com/wordle-past-answers

## API
### GET https://wordle-ultimate-first-guess-backend.onrender.com
- returns top scoring word 

## Technologies
- JavaScript, HTML, CCS, Bootstrap
- Node.js, Express, axios, cheerio, cors
