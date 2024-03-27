import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    console.log(id);
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h3 style={{  marginBottom: '0' }}>{name}</h3>
            <button type='button' onClick={() =>removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* <button type='button' className='btn' style={{ marginTop: '2rem' }} onClick={() => setPeople([])}>clear items</button> */}
      <button type='button' className='btn' style={{ marginTop: '2rem' }} onClick={clearAllItems}>clear items</button>
    </div>
  );
};

export default UseStateArray;
