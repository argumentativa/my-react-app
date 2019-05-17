import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>TXL3R Design System</h1>
    <p>The Trulia Experience Language (TXL) is based on sound design principles with the goal of developing a single unified experience across our platforms. TXL is a modular based design system allowing the team to scale and envolve designs while still adapting to different user needs. The module approach allows us to reuse much of our library in other parts of the experience and across multiple teams allow multiple teams to work concurrently and still maintain quality.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Watch Video</Link>
  </Layout>
)

export default IndexPage
