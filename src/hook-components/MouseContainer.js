import React, { useState } from "react"
import HookMouse from "./HookMouse"
export default function MouseContainer() {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
        Toggle Display
      </button>
      {display ? <HookMouse /> : null}
    </div>
  )
}
