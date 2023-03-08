import React from "react"
export default function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error(`${heroName} is not a hero!`)
  }

  return <div>{heroName}</div>
}
