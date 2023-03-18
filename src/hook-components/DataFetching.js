import React, { useEffect, useState } from "react"
export default function DataFetching() {
  const [posts, setPosts] = useState([])
  const [err, setErr] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        )
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        console.log(err)
        setErr(true)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {err ? <h1>Something Went Wrong!</h1> : null}
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
