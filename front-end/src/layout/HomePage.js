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
      <h4 className="text-success font-italic">{!firstGuess.length ? "...Have you ever fried cheese in a pan?" : firstGuess}</h4> 
      <ErrorAlert error={firstGuessError} />
      </main>
      <hr />
      <article>
        <h5>How Does This Work?</h5>
        <p>Wordle has a list of words that could be solutions for any given day (A). Each day, a solution is provided. Thus, we have a list of all words used as solutions (B). If we subtract (B) from (A), we are left with all words that have the potential to be solutions (C).</p>
        <p>With (C), we count the letter frequency of each letter of each word included in (C). With our tally of letter counts, we assign each word in (C) a score by summing each letter's frequency of each word.</p>
        <p>We select the highest scoring word as our start word for each day. This start word gives you the highest probability of getting the most letters (yellow).</p>
        <p>This will automatically calculate everytime you come to this site so be sure to give it a look before you play!</p>
      </article>
      <hr />
      <footer className="display-5 bg-success text-white p-3">
        <h6>Copyright: Kyle Haesler</h6>
        <p>In honor of the Worlding Turtles</p>
      </footer>
      </div>
  );
}

export default HomePage;