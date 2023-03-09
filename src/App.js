import "./App.css"
import ClickCounter2 from "./components/ClickCounter2"
import Counter2 from "./components/Counter2"
import HoverCounter2 from "./components/HoverCounter2"
import User from "./components/User"
function App() {
  return (
    <div className="App">
      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedIn) => (isLoggedIn ? "Brad" : "Guest")} /> */}
      <Counter2
        render={(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter2
        render={(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  )
}

export default App
