import "./App.css"
import ClickCounter2 from "./components/ClickCounter2"
import HoverCounter2 from "./components/HoverCounter2"
import User from "./components/User"
function App() {
  return (
    <div className="App">
      <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedIn) => (isLoggedIn ? "Brad" : "Guest")} />
    </div>
  )
}

export default App
