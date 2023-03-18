import React, { useEffect, useState } from "react"
export default function DataFetching() {
  const [posts, setPosts] = useState([])
  const [ID, setID] = useState(1)
  const [err, setErr] = useState(false)
  const [IDWhenClicked, setIDWhenClicked] = useState(ID)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${IDWhenClicked}`
        )
        const data = await response.json()

        if (Array.isArray(data)) {
          setPosts(data)
        } else {
          setPosts([data])
        }
        console.log(data)
      } catch (err) {
        console.log(err)
        setErr(true)
      }
    }

    fetchData()
  }, [IDWhenClicked])

  return (
    <div>
      <input type="text" value={ID} onChange={(e) => setID(e.target.value)} />
      <button onClick={() => setIDWhenClicked(ID)}>Submit</button>
      {err ? <h1>Something Went Wrong!</h1> : null}
      {posts.map((post) => (
        <div key={post.id || Date.now()}>{post.title}</div>
      ))}
    </div>
  )
}
