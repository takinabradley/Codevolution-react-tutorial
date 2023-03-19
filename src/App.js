import React, { useState } from "react"
import "./App.css"
import ClassTimer from "./hook-components/ClassTimer"
import ComponentC from "./hook-components/ComponentC"
import Counter from "./hook-components/Counter"
import CounterOne from "./hook-components/CounterOne"
import DataFetching from "./hook-components/DataFetching"
import DocTitleOne from "./hook-components/DocTitleOne"
import DocTitleTwo from "./hook-components/DocTitleTwo"
import FocusInput from "./hook-components/FocusInput"
import HookTimer from "./hook-components/HookTimer"

import UserContext from "./hook-components/UserContext"

function App() {
  return (
    <div className="App">
      <DocTitleOne />
      <DocTitleTwo />
    </div>
  )
}

export default App
