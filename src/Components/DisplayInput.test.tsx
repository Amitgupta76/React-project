import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For enhanced matchers
import DisplayInput from './DisplayInput';

describe('DisplayInput', () => {
  it('renders the component with input items', () => {
    const inputs = ['Input 1', 'Input 2', 'Input 3'];
    
    const { getByText } = render(<DisplayInput inputs={inputs} />);
    
    const headerElement = getByText('Displaying Inputs:');
    expect(headerElement).toBeInTheDocument();
    
    inputs.forEach(input => {
      const inputElement = getByText(input);
      expect(inputElement).toBeInTheDocument();
    });
  });
});
