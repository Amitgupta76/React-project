import { render, screen } from '@testing-library/react';
import Home from './Home'

test('renders Messages App header', () => {
    const { getByText } = render(<Home />);
    const headerElement = getByText(/Messages App/i);
    expect(headerElement).toBeInTheDocument;
  });