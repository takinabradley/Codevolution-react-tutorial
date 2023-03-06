export default function FunctionClick() {
  const clickHandler = (e) => {
    console.log(e)
  }
  return <button onClick={clickHandler}>click</button>
}
