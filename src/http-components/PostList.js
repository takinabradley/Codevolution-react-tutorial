import React from "react"
export default class PostList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      errorMessage: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((err) => this.setState({ errorMessage: "Error retreiving data" }))
  }

  render() {
    const { posts, errorMessage } = this.state
    const errorElem = errorMessage ? <div>{errorMessage}</div> : null
    return (
      <div>
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
        {errorElem}
      </div>
    )
  }
}
