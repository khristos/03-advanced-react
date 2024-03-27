import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState('jo koy'));
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [count, setCount] = useState(0);
  //const [name, setName] = React.useState();
  const handleClick = () => {
    // console.log(count);
    setCount(count + 1);
  };

  return (
    <div>
      <h2>useState basics</h2>
      <h4>You clicked {count} times</h4>
      <button type='button' className='btn' onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
