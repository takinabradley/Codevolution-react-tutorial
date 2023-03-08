import "./App.css"
import Hero from "./components/Hero"
import ErrorBoundry from "./components/ErrorBoundry"
function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <Hero heroName={"Batman"} />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName={"Superman"} />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName={"Joker"} />
      </ErrorBoundry>
    </div>
  )
}

export default App
