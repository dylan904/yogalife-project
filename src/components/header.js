import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class Header extends React.Component {

  constructor(props) {
    console.log("constructedd")
    super(props)
    this.state = {
      isDT: window.innerWidth >= 992,
      showMenuDT: false,
      showMenuMob: false,
      pagePath: window.location.pathname,
    }
    //this.toggleNavMob = this.toggleNavMob.bind(this)
  }

  

  componentDidMount() {
    console.log("mounted")
    //window.onscroll = () => this.handleScroll()
    //window.onresize = () => this.handleResize()

    

    /*this.setState({
      pagePath: window.location.pathname,
    })*/
  }

  render() {
    return (
      <header
        style={{
          background: `rebeccapurple`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
            </Link>
          </h1>
        </div>
      </header>
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
