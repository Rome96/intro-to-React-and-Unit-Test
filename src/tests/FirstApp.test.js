import React from 'react'
import '@testing-library/jest-dom'
import FirstApp from '../FirstApp';
import { render } from '@testing-library/react';

describe('Testing in component FirstApp', () => {
  test('FirstApp return Hola, soy Turiano', () => {
    const greeting = 'Hola, soy Turiano';
    const { getByText } = render(<FirstApp greeting={greeting} />);

    expect(getByText(greeting)).toBeInTheDocument()
  });
});