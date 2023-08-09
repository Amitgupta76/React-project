import React, { useState } from 'react';
import InputForm from '../Components/InputForm';
import DisplayInput from '../Components/DisplayInput';

const Home = () => {
  const [inputArray, setInputArray] = useState<string[]>([]);

  const handleInputSubmit = (input: string) => {
    setInputArray([...inputArray, input]);
  };

  return (
    <div className="App" style={{textAlign: 'center'}}>
      <h1>Messages App</h1>
      <InputForm onInputSubmit={handleInputSubmit} />
      <DisplayInput inputs={inputArray} />
    </div>
  );
}
export default Home;