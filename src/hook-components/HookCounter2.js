import React, { useState } from "react"
export default function HookCounter2() {
  const [count, setCount] = useState(0)
  return (
    <div>
      count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  )
}
