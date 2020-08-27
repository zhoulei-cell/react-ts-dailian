import {useState, useEffect, useRef} from 'react'

interface IReturn{
  value: string;
  change: VoidFunction;
}
const useCountDown: (text?: string) => IReturn = (text: string = '获取验证码') => {
  const myRef = useRef<number>(0)
  const [value, setValue] = useState(text)
  useEffect(() => {
    return () => {
      clearInterval(myRef.current)
    }
  }, [])
  const change: VoidFunction = () => {
    let num: number = 60
    const countDown: VoidFunction = () => {
      num--;
      if (num===0) {
        setValue('重新获取验证码')
        clearInterval(myRef.current)
      } else {
        setValue(`${num}后重试`)
      }
    }
    countDown()
    myRef.current = window.setInterval(countDown, 1000)
  }
  return {
    value,
    change
  }
}

export default useCountDown