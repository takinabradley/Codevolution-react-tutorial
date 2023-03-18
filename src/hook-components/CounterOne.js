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

const mergeObject = (currentState, propObj) => {
  const newState = { ...currentState }
  for (const key in propObj) {
    if (propObj[key] === currentState[key]) continue
    newState[key] = propObj[key]
  }
  return newState
}

export default function CounterOne() {
  const [state, setState] = useReducer(mergeObject, { a: 1, b: 2, c: 3 })

  const stateData = Object.entries(state).map((entry, index) => (
    <div key={index}>
      {entry[0]} {entry[1]}
    </div>
  ))

  return (
    <div>
      {stateData}
      <button onClick={() => setState({ a: state.a + 1 })}>Increment</button>
      <button onClick={() => setState({ b: state.b - 1 })}>Decrement</button>
      <button onClick={() => setState({ a: 1, b: 2, c: 3 })}>Reset</button>
    </div>
  )
}
