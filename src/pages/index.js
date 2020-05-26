import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Mindfulness is a way of life, and the principles of mindfulness can be applied to each and every living moment.</p>
    <p>This website is dedicated to sharing knowledge, experiences and thoughts about living life <i>The Mindful Way</i></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/contact/">Contact us</Link>
  </Layout>
)

export default IndexPage
