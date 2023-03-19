import React, { useEffect, useRef } from "react"
export default function FocusInput() {
  const input = useRef(null)

  useEffect(() => {
    input.current.focus()
  }, [])

  return (
    <div>
      <input type="text" ref={input} />
    </div>
  )
}
