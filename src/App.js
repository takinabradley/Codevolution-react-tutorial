import React, { useState } from "react"
import "./App.css"
import ComponentC from "./hook-components/ComponentC"
import DataFetching from "./hook-components/DataFetching"

import UserContext from "./hook-components/UserContext"

function App() {
  const [userName, setUserName] = useState("Brad")
  return (
    <div className="App">
      <UserContext.Provider value={userName}>
        <ComponentC />
      </UserContext.Provider>
    </div>
  )
}

export default App
