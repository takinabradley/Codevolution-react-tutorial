import logo from "./logo.svg"
import "./App.css"
import Greet from "./components/Greet"
import Welcome from "./components/Welcome"
import Message from "./components/Message"

function App() {
  return (
    <div className="App">
      <Greet name={"Brad"}>
        <p>I'm a child!</p>
      </Greet>

      <Welcome name="Brad" heroName="Batman">
        <p>I'm also a child!</p>
      </Welcome>

      <Message />
    </div>
  )
}

export default App
