import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = value ? checkGuess(value.value, answer) : undefined;

  return (
    <div>
      <p className='guess'>
        {range(5).map((num) => {
          // TODO: checkGuess
          return (
            <Cell
              key={num}
              letter={result ? result[num].letter : undefined}
              status={result ? result[num].status : undefined}
            />
          );
        })}
      </p>
    </div>
  );
}

export default Guess;
