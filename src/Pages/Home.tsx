import React, { useState } from 'react';
import InputForm from '../Components/InputForm';
import DisplayInput from '../Components/DisplayInput';
import { useQuery, useMutation } from '@apollo/client';
import { GET_DATA, ADD_DATA } from '../graphql-queries';

const Home = () => {
  const [inputArray, setInputArray] = useState<string[]>([]);

  const { loading, error, data } = useQuery(GET_DATA);
  const [addDataMutation] = useMutation(ADD_DATA);


  const handleInputSubmit = (input: string) => {
    setInputArray([...inputArray, input]);
    addDataMutation({ variables: { data: input } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error)
    return <p>{error.message}</p>
  }


  return (
    <div className="App" style={{textAlign: 'center'}}>
      <h1>Messages App</h1>
      <InputForm onInputSubmit={handleInputSubmit} />
      <DisplayInput inputs={data.getData}/>
    </div>
  );
}
export default Home;