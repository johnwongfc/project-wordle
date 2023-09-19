import React from 'react';

function GuessInput({ handleSubmitGuess, isDisabled }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert('Please enter exactly 5 characters. ');
      return;
    }
    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='guess-input-wrapper'>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          required
          disabled={isDisabled}
          minLength={5}
          maxLength={5}
          value={tentativeGuess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
          id='guess-input'
          type='text'
        />
      </form>
    </div>
  );
}

export default GuessInput;
