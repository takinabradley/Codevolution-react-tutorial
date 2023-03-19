import React, { useEffect, useState } from "react"
import useDocumentTitle from "../hooks/useDocumentTitle"
export default function DocTitleTwo() {
  const [count, setCount] = useState(0)
  useDocumentTitle(count)

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  )
}
