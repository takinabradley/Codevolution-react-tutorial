import logo from "./logo.svg"
import "./App.css"
import Counter from "./components/Counter"
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"
import ParentComponent from "./components/ParentComponent"

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  )
}

export default App
