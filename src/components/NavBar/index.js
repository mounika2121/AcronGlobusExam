import {Link} from 'react-router-dom'
import {MdOutlineQuestionMark} from 'react-icons/md'
import {PiSuitcaseSimpleThin} from 'react-icons/pi'
import {IoDocumentTextOutline} from 'react-icons/io5'
import {GoTag} from 'react-icons/go'
import {HiOutlineUser} from 'react-icons/hi2'
import {TbBadge} from 'react-icons/tb'
import {GrAnnounce} from 'react-icons/gr'
import {FaStackExchange, FaInbox} from 'react-icons/fa'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div>
      <img
        className="logo"
        src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1704031223/Stack_Overflow-Logo.wine_ll2sa8.png"
        alt="logo"
      />
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          <MdOutlineQuestionMark size={15} className="icon" />
          QUESTIONS
        </Link>
      </li>
      <li className="link-item">
        <PiSuitcaseSimpleThin size={15} className="icon" />
        JOBS
      </li>
      <li className="link-item">
        <IoDocumentTextOutline size={15} className="icon" />
        DOCUMENTATION
      </li>
      <li className="link-item">
        <GoTag size={15} className="icon" />
        TAGS
      </li>
      <li className="link-item">
        <HiOutlineUser size={15} className="icon" />
        USERS
      </li>
      <li className="link-item">
        <TbBadge size={15} className="icon" />
        BADGES
      </li>
      <li className="link-item">
        <GrAnnounce size={15} className="icon" />
        ASK QUESTION
      </li>
      <li className="link-item">
        <FaStackExchange size={15} className="icon" />
        STACK EXCHANGE
      </li>
      <li className="link-item">
        <FaInbox size={15} className="icon" />
        INBOX
      </li>
    </ul>
  </nav>
)

export default Header
