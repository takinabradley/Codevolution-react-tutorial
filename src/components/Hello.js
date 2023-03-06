import React from "react"
/* export default function Hello() {
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  )
} */
export default function Hello() {
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello!")
  )
}
