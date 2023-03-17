import React from "react"
import { useState, useEffect } from "react"

export default function HookCounter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  useEffect(() => {
    console.log("document title updated")
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count}
      </button>
    </div>
  )
}
