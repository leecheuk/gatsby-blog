import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      {data.allMarkdownRemark.edges.map(({node}) => (
        node ? <div className="blog-post-container" key={node.id}>
          <div className="blog-post">
            <Link to={node.fields.slug}><h3>{node.frontmatter.title}</h3></Link>
            <p className="author">{node.frontmatter.author}</p>
            <p className="excerpt">{node.excerpt}</p>
          </div>
        </div> : null
      ))}
    </Layout>
  )
}

export default IndexPage

export const  query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
              title
              date
              author
            }
            excerpt
            timeToRead
          }
      }
    }
  }
`