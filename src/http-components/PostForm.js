import React from "react"
export default class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userID: "",
      title: "",
      body: ""
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state)
        }
      )

      const content = await response.json()
      console.log(content, response)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { userID, title, body } = this.state
    return (
      <div>
        <form action="" onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userID"
              value={userID}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
