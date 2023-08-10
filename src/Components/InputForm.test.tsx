import { fireEvent, render, screen } from '@testing-library/react';
import InputForm from './InputForm';

describe("Input Form", () => {
  test('InputForm renders correctly', () => {
    const { getByPlaceholderText } = render(<InputForm onInputSubmit={() => {}} />);
    const inputElement = screen.getByPlaceholderText(/Enter Input/i)
    const buttonElement = screen.getByRole("button", { name: /Submit/i })
    fireEvent.click(buttonElement)
    expect(inputElement.textContent).toBe("")
  });

  test('InputForm updates input state correctly', () => {
    const { getByPlaceholderText } = render(<InputForm onInputSubmit={() => {}} />);
    const inputElement = getByPlaceholderText(/Enter input/i);
    fireEvent.change(inputElement, { target: { textContent: 'Test input' } });
    expect(inputElement.textContent).toBe('Test input');
  });
})