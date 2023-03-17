import React, { useEffect, useState } from "react"
export default function IntervalHookCounter() {
  const [count, setCount] = useState(0)
  const tick = () => setCount((prevCount) => prevCount + 1)

  useEffect(() => {
    console.log("hi")
    const interval = setInterval(tick, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div>{count}</div>
}
