import logo from "./logo.svg"
import "./App.css"
import Greet from "./components/Greet"
import Welcome from "./components/Welcome"

function App() {
  return (
    <div className="App">
      <Greet name={"Brad"}>
        <p>I'm a child!</p>
      </Greet>

      <Welcome name="Brad" heroName="Batman">
        <p>I'm also a child!</p>
      </Welcome>
    </div>
  )
}

export default App
