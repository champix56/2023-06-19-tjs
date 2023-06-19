import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexHorizontal1RdGrow from './FlexHorizontal1RdGrow';

describe('<FlexHorizontal1RdGrow />', () => {
  test('it should mount', () => {
    render(<FlexHorizontal1RdGrow />);
    
    const flexHorizontal1RdGrow = screen.getByTestId('FlexHorizontal1RdGrow');

    expect(flexHorizontal1RdGrow).toBeInTheDocument();
  });
});