import "./App.css"
import DataFetching from "./hook-components/DataFetching"
import HookCounter from "./hook-components/HookCounter"
import HookCounter2 from "./hook-components/HookCounter2"
import HookCounter3 from "./hook-components/HookCounter3"
import HookCounter4 from "./hook-components/HookCounter4"
import HookMouse from "./hook-components/HookMouse"
import IntervalClassCounter from "./hook-components/IntervalClassCounter"
import IntervalHookCounter from "./hook-components/IntervalHookCounter"
import MouseContainer from "./hook-components/MouseContainer"

function App() {
  return (
    <div className="App">
      <DataFetching />
    </div>
  )
}

export default App
