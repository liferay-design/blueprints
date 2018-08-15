import React from 'react'
import { Link, graphql } from 'gatsby'
import { Sidebar } from 'semantic-ui-react'
import MainLayout from '../MainLayout'
import classes from './styles.module.scss'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <MainLayout>
      <div>
        <Sidebar visible="true" width="wide">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link key={node.id} to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
          ))}
        </Sidebar>

        <div className={classes.contentContainer}>
          <h1>{post.frontmatter.title}</h1>

          <h2>Blueprints</h2>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </MainLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blueprints)/" } }
    ) {
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
        }
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
