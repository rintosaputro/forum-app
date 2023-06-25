import { useState } from 'react';

const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // return [value, handleChange, setValue];
  return [value, setValue];
};

export default useInput;
