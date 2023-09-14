import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDeafult();

    if (guess.length !== 5) {
      window.alert('Please enter exactly 5 characters. ');
      return;
    }

    console.log({ guess });

    setGuess('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='guess-input-wrapper'>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          value={guess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
          id='guess-input'
          type='text'
        />
      </form>
    </div>
  );
}

export default GuessInput;
