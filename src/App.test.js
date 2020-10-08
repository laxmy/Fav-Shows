import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null)
    },
    writable: true
  });
})

it("Should call localStorage getItem on render", () => {
  render(<App />);
  expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
});

