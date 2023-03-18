import React, { useEffect, useState } from "react"
export default function IntervalHookCounter() {
  const [count, setCount] = useState(0)
  const tick = () => {
    console.log("tick")
    setCount((prevCount) => prevCount + 1)
  }

  useEffect(() => {
    // the useEffect cleanup function happens every re-render
    // and so this doesn't actually cause intervals to stack.

    // if we check prevState, like we do now, we can actually safely
    // remove count as a dependency so this effect is only applied once
    // and is cleaned up when the component is unmounted.
    console.log("hi")
    const interval = setInterval(tick, 1000)

    return () => {
      console.log("cleaning up")
      clearInterval(interval)
    }
  }, [count])

  return <div>{count}</div>
}
