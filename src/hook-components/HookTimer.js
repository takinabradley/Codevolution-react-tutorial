import React, { useEffect, useRef, useState } from "react"
export default function HookTimer() {
  const [timer, setTimer] = useState(0)
  const interval = useRef(null)

  // can use this as value that doesn't change between renders
  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)

    return () => clearInterval(interval.current)
  }, [])

  return (
    <div>
      {timer}
      <button onClick={() => clearInterval(interval.current)}>
        Clear Timer
      </button>
    </div>
  )
}
