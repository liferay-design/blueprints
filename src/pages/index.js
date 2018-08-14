import React from 'react'
import { Link, graphql } from 'gatsby'
import { MainLayout } from 'components/templates'

export default ({ data }) => {
  return (
    <MainLayout>
      <div>
        <h1>Home Page</h1>

        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>

              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
