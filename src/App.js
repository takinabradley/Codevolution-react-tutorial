import "./App.css"
import Hero from "./components/Hero"
import ErrorBoundry from "./components/ErrorBoundry"
import ClickCounter from "./components/ClickCounter"
import HoverCounter from "./components/HoverCounter"
function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
    </div>
  )
}

export default App
