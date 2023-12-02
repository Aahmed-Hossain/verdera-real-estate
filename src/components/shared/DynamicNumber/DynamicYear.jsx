
import  { useState, useEffect } from 'react';

const DynamicYear = () => {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    const updateNumber = () => {
      if (number === 25) {
        clearInterval(intervalId);
      } else {
        setNumber(number + 1);
      }
    };
    const intervalId = setInterval(updateNumber, 500);
    return () => clearInterval(intervalId);
  }, [number]);
  return (
    <div>
      <h1><span className='font-bold text-4xl '>{number}</span></h1>
    </div>
  );
};

export default DynamicYear;
