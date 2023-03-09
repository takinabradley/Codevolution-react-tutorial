import "./App.css"
import ComponentC from "./components/ComponentC"
import UserContext from "./components/userContext"

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="Brad">
        <ComponentC />
      </UserContext.Provider>
    </div>
  )
}

export default App
