import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  const [isDisabled, setIsDisabled] = React.useState(false);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [
      ...guesses,
      {
        value: tentativeGuess,
        id: `${tentativeGuess}-${Math.random()}`,
      },
    ];

    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus('win');
      setIsDisabled(true);
    } else if (nextGuesses.length >= 6) {
      setGameStatus('lost');
      setIsDisabled(true);
    }
  }
  return (
    <div>
      {gameStatus === 'win' && <HappyBanner />}
      {gameStatus === 'lost' && <SadBanner answer={answer} />}
      <GuessResults
        guesses={guesses}
        answer={answer}
        setIsDisabled={setIsDisabled}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default Game;
