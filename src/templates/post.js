import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({data}) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <h4>{post.frontmatter.author}</h4>
                <div dangerouslySetInnerHTML = {{__html: post.html}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                author
                date
            }
        }
    }
`