import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexVertical3rdGrow from './FlexVertical3rdGrow';

describe('<FlexVertical3rdGrow />', () => {
  test('it should mount', () => {
    render(<FlexVertical3rdGrow />);
    
    const flexVertical3rdGrow = screen.getByTestId('FlexVertical3rdGrow');

    expect(flexVertical3rdGrow).toBeInTheDocument();
  });
});