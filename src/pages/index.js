import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">

      <h1>TXL3R<br />Design System</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      <Link to="/page-2/">Watch Video</Link>

      </div>
    </div>

  </Layout>
)

export default IndexPage
