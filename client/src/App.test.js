import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
  render(<App />);
});

test('navbar displayed', () => {
  const { findByTitle} = render(<App />);
  findByTitle(/navbar/i);
})

test('players displayed', () => {
  const { findByTitle} = render(<App />);
  findByTitle(/players/i);
})





