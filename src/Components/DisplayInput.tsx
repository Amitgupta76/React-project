import React from 'react';

interface DisplayInputProps {
  inputs: string[];
}

const DisplayInput: React.FC<DisplayInputProps> = ({ inputs }) => {
  return (
    <div>
      <h2>Displaying Inputs:</h2>
      <ul>
        {inputs.map((input, index) => (
          <li key={index}>{input}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayInput;