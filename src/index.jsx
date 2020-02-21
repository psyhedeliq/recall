import React from 'react';
import { render } from 'react-dom';
import { Recall } from './component/app';

const renderToDom = () => {
  const recall = document.querySelector('#recall');
  if (recall !== null) {
    render(<Recall />, recall);
  }
};

renderToDom();

export { renderToDom };
