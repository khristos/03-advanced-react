import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClickGotcha = () => {
    setValue(value + 1);
    console.log(value);
  };
  const handleClick = () => {
    setValue((currentState) => {
      const newState = currentState + 1;
      console.log("newState", newState);
      return newState;
    });
    console.log("prevState", value);
  };
  const handleClickSetTimeout = () => {
    setTimeout(() => {
      console.log('clicked the button');
      setValue((value + 1));
    }, 3000);
  };
  const handleClickSetTimeoutFunctional = () => {
    setTimeout(() => {
      console.log('clicked the button');
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h2>useState "gotcha"</h2>
      <h3>{value}</h3>
      <button type='button' className='btn' onClick={handleClickSetTimeoutFunctional}>increase</button>
    </div>
  );
};

export default UseStateGotcha;
