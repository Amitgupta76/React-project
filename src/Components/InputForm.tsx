import React, { useState } from 'react';

interface InputFormProps {
  onInputSubmit: (input: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onInputSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onInputSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputForm;