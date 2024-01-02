import {Component} from 'react'
import {Audio} from 'react-loader-spinner'
import ItemCard from '../ItemCard'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Questions extends Component {
  state = {
    questionsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const apiUrl =
      'https://api.stackexchange.com/2.3/questions?pagesize=10&order=desc&sort=activity&site=stackoverflow'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.items.map(item => ({
        id: item.question_id,
        title: item.title,
        tags: item.tags,
        lastActivityDate: item.last_activity_date,
        answerCount: item.answer_count,
        viewCount: item.view_count,
        link: item.link,
        name: item.owner.display_name,
      }))
      this.setState({
        questionsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="items-loader-container">
      <Audio type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="items-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="all-items-error"
        className="items-failure-img"
      />
      <h1 className="items-failure-heading-text">Oops! Something Went Wrong</h1>
      <p className="items-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderItemsListView = () => {
    const {questionsList} = this.state
    return (
      <div>
        <ul>
          {questionsList.map(question => (
            <ItemCard itemData={question} key={question.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderAllItems = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderItemsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <h3>Questions</h3>
        <div>
          <button type="button" className="btn selected-btn">
            interesting
          </button>
          <button type="button" className="btn">
            featured
          </button>
          <button type="button" className="btn">
            hot
          </button>
          <button type="button" className="btn">
            week
          </button>
          <button type="button" className="btn">
            month
          </button>
        </div>
        <hr />
        {this.renderAllItems()}
      </div>
    )
  }
}

export default Questions
