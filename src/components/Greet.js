export default function Greet({ name, children }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {children}
    </div>
  )
}
