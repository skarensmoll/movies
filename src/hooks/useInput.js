import { useState } from 'react';

const useInput = (initialValue, validationFunc)=> {
  console.log('executing hook useInput')

  const [inputValue, setInputValue] = useState(initialValue);
  const [inputTouched, setInputTouched] = useState(false);
  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const handleInputBlur = (e) => {
    setInputTouched(true);
  };

  const resetInput = () => {
    setInputValue('');
    setInputTouched(false);
  }

  const inputValid = validationFunc(inputValue);

  return [
    inputValue,
    inputValid,
    inputTouched,
    handleInputBlur,
    handleInputChange,
    resetInput
  ]
}

export default useInput;