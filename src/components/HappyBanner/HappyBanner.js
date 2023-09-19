import React from 'react';

function HappyBanner({ moveCount }) {
  return (
    <div class='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {moveCount} guesses</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
