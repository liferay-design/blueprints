import React from 'react'
import { graphql } from 'gatsby'
import MainLayout from '../MainLayout'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <MainLayout>
      <div>
        <h1>{post.frontmatter.title}</h1>

        <h2>Blueprints</h2>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </MainLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
