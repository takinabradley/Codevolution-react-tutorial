import React from "react"
export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: "",
      comments: "",
      topic: ""
    }
  }

  changeUserName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  changeComments = (e) => {
    this.setState({
      comments: e.target.value
    })
  }

  changeTopic = (e) => {
    this.setState({
      topic: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <form action="" onSubmit={this.submitForm}>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.changeUserName}
          />
          <div>
            <label htmlFor="">Comments</label>
            <textarea
              value={this.state.comments}
              onChange={this.changeComments}
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Topic</label>
            <select value={this.state.topic} onChange={this.changeTopic}>
              <option selected value="">
                Nothing
              </option>
              <option value="new value">new value</option>
              <option value="new value2">new value2</option>
            </select>
          </div>

          <button type="Submit">Submit</button>
        </div>
      </form>
    )
  }
}
