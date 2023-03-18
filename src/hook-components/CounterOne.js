import React, { useReducer } from "react"

const initialState = 0
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1
    case "decrement":
      return currentState - 1
    case "reset":
      return initialState
    default:
      return currentState
  }
}

export default function CounterOne() {
  const [count, dispatchCount] = useReducer(reducer, 0)

  return (
    <div>
      {count}
      <button onClick={() => dispatchCount("increment")}>Increment</button>
      <button onClick={() => dispatchCount("decrement")}>Decrement</button>
      <button onClick={() => dispatchCount("reset")}>Reset</button>
    </div>
  )
}
