import React from "react"
export default class PostList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    )
  }
}
