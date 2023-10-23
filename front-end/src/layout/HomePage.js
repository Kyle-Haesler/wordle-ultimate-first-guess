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
            <h1 className="display-4 bg-success text-white p-3">Wordle's Ultimate First Guess</h1>
      <h2>{firstGuess}</h2>
      <ErrorAlert error={firstGuessError} />
      </div>
  );
}

export default HomePage;