import React from "react"
export default function MemoComponent({ name }) {
  console.log("rendering Memo Component")
  return <div>{name}</div>
}
