import React, { useMemo, useState } from "react"
export default function Counter() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => setCounterOne((prev) => prev + 1)
  const incrementTwo = () => setCounterTwo((prev) => prev + 2)

  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <button onClick={incrementOne}>{counterOne}</button>
      <span>{isEven.toString()}</span>
      <button onClick={incrementTwo}>{counterTwo}</button>
    </div>
  )
}
