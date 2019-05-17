import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
<div className="Header">
  <div className="HeaderGroup">
    <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
    <Link to="/designprinciples">Getting Started</Link>
    <Link to="/product">Product</Link>
    <Link to="/marketing">Marketing</Link>
    <Link to="/buy"><button>Buy</button></Link>
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
