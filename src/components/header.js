import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className='HeaderGroup'>
          <Link to="/"><img alt='logo' src={require('../images/logodp.jpg').default} width='40' /></Link>
          <Link to="/page-2/">Portfolio</Link>
          <Link to="/page-2/">About Me</Link>
          <Link to="/page-2/">Reviews</Link>
          <Link to="/page-2/"><button>Book Me</button></Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
