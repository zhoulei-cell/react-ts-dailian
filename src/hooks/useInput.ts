import React, { useState } from 'react'
type InputChange = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface IReturn{
  value: string;
  change: InputChange
}

function useInput(val: string = ''): IReturn {
  const [value, setValue] = useState(val)
  const change: InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return {value, change}
}

export default useInput