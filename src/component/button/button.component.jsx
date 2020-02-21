import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} data-testid='awesome-button'>
      Create
    </button>
  );
};

export { Button };
