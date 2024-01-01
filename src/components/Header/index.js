import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosSearch} from 'react-icons/io'
import {IoHelpBuoyOutline} from 'react-icons/io5'
import {HiComputerDesktop} from 'react-icons/hi2'
import {FaUserCircle, FaChevronDown} from 'react-icons/fa'
import './index.css'

const Header = () => (
  <div className="header-top-container">
    <div className="inner-container">
      <div className="icon-space">
        <GiHamburgerMenu size={20} />
      </div>
      <div className="search-container">
        <IoIosSearch size={18} />
        <input type="search" placeholder="Search" />
      </div>
    </div>
    <div className="inner-container">
      <div className="search-container icon-space">
        <IoHelpBuoyOutline size={18} />
        <p>Help</p>
      </div>
      <div className="search-container icon-space">
        <HiComputerDesktop size={18} />
        <p>Tour</p>
      </div>
      <div className="search-container">
        <FaUserCircle size={20} />
        <FaChevronDown size={12} />
      </div>
    </div>
  </div>
)

export default Header
