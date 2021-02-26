import React from "react"
import { Link } from "gatsby"

//components
import Layout from "../components/layout"
import SEO from "../components/seo"

function blank() {
  return <Layout>
      <SEO
        title={`This page is blank`}
      />
      <h1>This page is blank!!</h1>
      <p>Nothing to see here</p>
      <Link to={`/`}>Go Home</Link>
  </Layout>
}

export default blank
