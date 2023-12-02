
import  { useState, useEffect } from 'react';

const DynamicClients = () => {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    const updateNumber = () => {
      if (number === 685) {
        clearInterval(intervalId);
      } else {
        setNumber(number + 1);
      }
    };
    const intervalId = setInterval(updateNumber, 70);
    return () => clearInterval(intervalId);
  }, [number]);
  return (
    <div>
      <h1><span className='font-bold text-4xl text-green-500'>{number}</span></h1>
    </div>
  );
};

export default DynamicClients;
