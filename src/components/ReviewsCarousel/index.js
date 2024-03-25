// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onLeft = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 1} : null,
    )
  }

  onRight = () => {
    this.setState(prevState =>
      prevState.count < 3 ? {count: prevState.count + 1} : null,
    )
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Reviews</h1>
          <div className="carousel">
            <button
              type="button"
              className="button"
              onClick={this.onLeft}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt=" left arrow"
                className="arrow"
              />
            </button>
            <div className="feedbackers">
              <img src={imgUrl} alt={username} className="profile" />
              <p className="name">{username}</p>
              <p className="company-name">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              type="button"
              className="button"
              onClick={this.onRight}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
