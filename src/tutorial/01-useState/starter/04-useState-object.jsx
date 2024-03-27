import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  });
  // ALTERNATIVE: setup three separate state values
  // const [name, setName] = useState('peter');
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState('read books');

  const displayPerson = () => {
    setPerson({ name: 'john', age: 28, hobby: 'scream at the computer' });
    // be careful, don't overwrite
    // setPerson({ name: 'susan' });
    // setPerson({ ...person, name: 'susan' });

    // ALTERNATIVE: set three state values
    // setName('john');
    // setAge(28);
    // setHobby('scream at the computer');
  };

  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys to: {person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>show john</button>
    </>
  );
};

export default UseStateObject;
