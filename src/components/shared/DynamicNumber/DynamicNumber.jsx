
import  { useState, useEffect } from 'react';

const DynamicNumber = () => {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    const updateNumber = () => {
      if (number === 100) {
        clearInterval(intervalId);
      } else {
        setNumber(number + 1);
      }
    };
    const intervalId = setInterval(updateNumber, 100);
    return () => clearInterval(intervalId);
  }, [number]);
  return (
    <div>
      <h1>Dynamic Number: <span className='font-bold text-4xl'>{number}</span></h1>
    </div>
  );
};

export default DynamicNumber;
