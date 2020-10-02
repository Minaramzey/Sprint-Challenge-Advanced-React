import React from 'react';
import ReactDOM from 'react-dom';
import Players from './Players';
import { render } from '@testing-library/react';



test("displays toggle function", () => {
   const {findAllByRole}= render(<Players />);
   findAllByRole(/h1/i);
   
  });

