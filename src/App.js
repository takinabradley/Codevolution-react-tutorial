import logo from "./logo.svg"
import "./App.css"
import Counter from "./components/Counter"
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"

function App() {
  return (
    <div className="App">
      <Counter />
      <FunctionClick />
      <ClassClick />
    </div>
  )
}

export default App
