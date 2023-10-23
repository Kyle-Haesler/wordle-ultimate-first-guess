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
    <main>
      <h1>{firstGuess}</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Reservations for date</h4>
      </div>
      <ErrorAlert error={firstGuessError} />
    </main>
  );
}

export default HomePage;