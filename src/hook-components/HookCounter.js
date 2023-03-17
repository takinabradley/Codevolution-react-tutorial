import React from "react"
import { useState } from "react"

export default function HookCounter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count}
      </button>
    </div>
  )
}
