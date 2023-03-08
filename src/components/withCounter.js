import React from "react"
export default function withCounter(WrappedComponent, incrementNumber) {
  function WithCounter(props) {
    const [count, setCount] = React.useState(0)

    const incrementCount = (e) => {
      setCount((prevCount) => prevCount + incrementNumber)
    }

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    )
  }

  WithCounter.displayName = `WithCounter(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`

  return WithCounter
}
