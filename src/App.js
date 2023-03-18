import React, { useState } from "react"
import "./App.css"
import ComponentC from "./hook-components/ComponentC"
import CounterOne from "./hook-components/CounterOne"
import DataFetching from "./hook-components/DataFetching"

import UserContext from "./hook-components/UserContext"

function App() {
  return (
    <div className="App">
      <CounterOne />
    </div>
  )
}

export default App
