import React, { useEffect, useState } from "react";
import { getFirstGuess } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";


function HomePage() {
  const [firstGuess, setFirstGuess] = useState([]);
  const [firstGuessError, setFirstGuessError] = useState(null);

  useEffect(getUltimateFirstGuess, []);

  function getUltimateFirstGuess() {
    const abortController = new AbortController();
    setFirstGuessError(null);
    getFirstGuess(abortController.signal)
      .then(setFirstGuess)
      .catch(setFirstGuessError);
    return () => abortController.abort();
  }

  return (
        <div>
          <header>
            <h1 className="display-4 bg-success text-white p-3">Wordle's Ultimate First Guess</h1>
            </header>
            <br />
            <main className="bg-light">
      <h3 className="text-decoration-underline">Today's Start Word:</h3>
      <h4 className="text-success font-italic">{!firstGuess.length ? "...Working very hard, please be patient (allow roughly 10 seconds to load)" : firstGuess}</h4> 
      <ErrorAlert error={firstGuessError} />
      <hr />
      <article>
        <h5>How Does This Work?</h5>
        <p>Wordle has a list of words that could be solutions for any given day (A). Each day, a solution is provided. Thus, we have a list of all words used as solutions (B). If we subtract (B) from (A), we are left with all words that have the potential to be solutions (C).</p>
        <p>With (C), we count the letter frequency of each letter of each word included in (C). With our tally of letter counts, we assign each word in (C) a score by summing each letter's frequency of each word.</p>
        <p>We select the highest scoring word as our start word for each day. This start word gives you the highest probability of getting the most letters (yellow).</p>
        <p>This will automatically calculate everytime you come to this site so be sure to give it a look before you play!</p>
      </article>
      <hr />
      <article>
        <h5>Simulation Results: 1.78 greens or yellows per guess</h5>
        <p>It is possible to simulate an entire round of wordle words (A) by selecting a solution word at random, producing our guess word, counting the letters (green or yellow) that we guess correctly and removing the solution word from (A).</p>
        <p>We repeat this process until there are no more words left (~2,300 words so that many guesses as well). This is one round.</p>
        <p>After running this simulation 10 times (over 20,000 guesses), we come to the conclusion that on average, our first guess will get 1.78 letters correctly, green or yellow.</p>
        <p>However, as time goes on and more words are used, our average will improve! After the first guess, the rest is up to you!</p>
      </article>
      <hr />
      </main>
      <footer className="display-5 bg-success text-white p-3">
        <h6>Copyright: Kyle Haesler</h6>
        <p>In honor of the Wordling Turtles</p>
      </footer>
      </div>
  );
}

export default HomePage;