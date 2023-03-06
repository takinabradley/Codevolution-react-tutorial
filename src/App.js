import "./App.css"
import Inline from "./components/Inline"
import Stylesheet from "./components/Stylesheet"
import "./AppStyles.css"
import styles from "./AppStyles.module.css"

function App() {
  console.log(styles.success)
  return (
    <div className="App">
      <Stylesheet primary={true} />
      <Inline />
      <div className="error">Error</div>
      <div className={styles.success}>Success</div>
    </div>
  )
}

export default App
