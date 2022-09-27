// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  checkButtonOption = () => {
    this.setState(previous => ({
      isSubscribed: !previous.isSubscribed,
    }))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const changeText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para-text">Thank you! Happy Learning</p>
        <button
          type="button"
          className="btn-styling"
          onClick={this.checkButtonOption}
        >
          {changeText}
        </button>
      </div>
    )
  }
}

export default Welcome
