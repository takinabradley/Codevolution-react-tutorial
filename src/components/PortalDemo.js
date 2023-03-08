import React from "react"
import { createPortal } from "react-dom"
export default function PortalDemo() {
  // good for modal/popups and tooltips?

  // events fired from within a portal are bubbled up the normal react
  // hierarchy
  return createPortal(
    <h1>Portal Demo</h1>,
    document.getElementById("portal-root")
  )
}
