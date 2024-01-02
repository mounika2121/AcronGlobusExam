import {BiLike} from 'react-icons/bi'
import {RiQuestionAnswerLine} from 'react-icons/ri'
import {FaRegEye} from 'react-icons/fa'
import './index.css'

const ItemCard = props => {
  const {itemData} = props
  const {
    title,
    tags,
    lastActivityDate,
    answerCount,
    viewCount,
    link,
    name,
  } = itemData

  const timestamp = lastActivityDate

  const days = Math.floor(timestamp / (1000 * 60 * 60 * 24))

  return (
    <li className="list-item">
      <div className="container">
        <div>
          <h4>
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h4>
          <div className="tags-list">
            {tags.map(tag => (
              <p className="each-tag">{tag}</p>
            ))}
          </div>
          <div>
            <p>
              answered {days} days ago by <span className="name">{name}</span>
            </p>
          </div>
        </div>
        <div className="second-part">
          <div className="count-box">
            <p>0</p>
            <p>votes</p>
            <BiLike size={15} className="list-icon" />
          </div>
          <div className="count-box">
            <p>{answerCount}</p>
            <p>answer</p>
            <RiQuestionAnswerLine size={15} className="list-icon" />
          </div>
          <div className="count-box">
            <p>{viewCount}</p>
            <p>views</p>
            <FaRegEye size={15} className="list-icon" />
          </div>
        </div>
      </div>
      <hr className="hr-line" />
    </li>
  )
}

export default ItemCard
