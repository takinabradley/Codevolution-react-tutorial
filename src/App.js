import React, { useState } from "react"
import "./App.css"
import HookCounterOne from "./hook-components/HookCounterOne"
import HookCounterTwo from "./hook-components/HookCounterTwo"

function App() {
  return (
    <div className="App">
      <HookCounterOne />
      <HookCounterTwo />
    </div>
  )
}

export default App
