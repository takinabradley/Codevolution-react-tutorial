import { useState } from "react"
export default function useCounter(intialCount = 0, value = 1) {
  const [count, setCount] = useState(intialCount)
  const increment = () => setCount((prevCount) => prevCount + value)
  const decrement = () => setCount((prevCount) => prevCount - value)
  const reset = () => setCount(intialCount)

  return [count, increment, decrement, reset]
}
