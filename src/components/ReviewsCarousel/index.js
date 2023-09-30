// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {orderNo: 0}

  onLeft = () => {
    const {orderNo} = this.state
    if (orderNo > 0) {
      this.setState(prevOrder => ({
        orderNo: prevOrder.orderNo - 1,
      }))
    }
  }

  onRight = () => {
    const {orderNo} = this.state
    const {reviewsList} = this.props
    if (orderNo < reviewsList.length - 1) {
      this.setState(prevOrder => ({
        orderNo: prevOrder.orderNo + 1,
      }))
    }
  }

  render() {
    const {orderNo} = this.state
    const {reviewsList} = this.props

    const resultObject = reviewsList[orderNo]
    const {companyName, description, username, imgUrl} = resultObject
    return (
      <div className="bg-container">
        <div className="body-container">
          <h1 className="heading"> Reviews </h1>
          <img src={imgUrl} className="image" alt={username} />
          <div className="arrow-container">
            <button
              onClick={this.onLeft}
              type="button"
              data-testid="leftArrow"
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow"
                alt="left arrow"
              />
            </button>
            <p className="name">{username}</p>
            <button
              onClick={this.onRight}
              type="button"
              data-testid="rightArrow"
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow"
                alt="right arrow"
              />
            </button>
          </div>
          <div className="description-container">
            <p className="company-name">{companyName} </p>
            <p className="company-name"> {description}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
