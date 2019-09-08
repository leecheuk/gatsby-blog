import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page not found</h1>
    <p>Ooops! The page you are looking for is not found.</p>
    <Link to="/">Go Back</Link>
  </Layout>
)

export default NotFoundPage
