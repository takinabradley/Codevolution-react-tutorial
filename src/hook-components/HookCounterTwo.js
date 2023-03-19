import React, { useState } from "react"
import useCounter from "../hooks/useCounter"
export default function HookCounterTwo() {
  const [count, increment, decrement, reset] = useCounter()

  return (
    <div>
      {count}
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </div>
  )
}
