import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className='Header'>
    <div className='HeaderGroup'>
      <Link to="/"><img alt='logo' src={require('../images/logodp.jpg').default} width='40' /></Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/about">About Me</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/hire"><button>Hire Me</button></Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
