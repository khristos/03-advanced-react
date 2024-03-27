const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <div>
      <h2>useState error example</h2>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>increment</button>
    </div>
  );
};

export default ErrorExample;
