import { useState } from "react"

export interface IReturn{
  currentIndex: number;
  change: (index: number) => void
}
function useTabChang(index: number = 0): IReturn {
  const [currentIndex, setCurrentIndex] = useState(index)
  const change = (index: number) => {
    setCurrentIndex(index)
  }
  return {currentIndex, change}
}

export default useTabChang