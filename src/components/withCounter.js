import React from "react"
export default function withCounter(WrappedComponent) {
  function WithCounter() {
    const [count, setCount] = React.useState(0)

    const incrementCount = (e) => {
      setCount((prevCount) => prevCount + 1)
    }

    return <WrappedComponent count={count} incrementCount={incrementCount} />
  }
  return WithCounter
}
