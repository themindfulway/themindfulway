// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Contact us" />
    <h1>Contact us</h1>
    <p>Email us at admin@themindfulway.org</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
