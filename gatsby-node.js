/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {createFilePath} = require(`gatsby-source-filesystem`)
const path = require(`path`)

// create a path or slug for each page
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

// create page for each slug
exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/post.js`),
                    context: {
                        slug: node.fields.slug
                    }
                })
            })
            resolve()
        })
    })
}