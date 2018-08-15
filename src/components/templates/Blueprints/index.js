import React, { Component } from 'react'
import { graphql } from 'gatsby'
import MainLayout from '../MainLayout'
import styles from './styles.module.scss'
import { cloneDeep, get, set } from 'lodash'
import { Sidebar } from 'components/organisms'

function upsertAtPath(path, value, obj) {
  obj = cloneDeep(obj)
  const pathValue = get(obj, path)
  set(obj, path, { ...pathValue, ...value })

  return obj
}

export default class Blueprints extends Component {
  buildSidebarTree(markdownNodes) {
    const sidebarTree = markdownNodes.edges.reduce(
      (currentTree, currentValue) => {
        const slug = currentValue.node.fields.slug
        const title = currentValue.node.frontmatter.title

        const slugArr = slug
          .split('/')
          .filter(slug => slug !== '')
          .slice(1)

        const treePath = slugArr.join('.children.')
        const sidebarItemValue = { title, slug }

        return upsertAtPath(treePath, sidebarItemValue, currentTree)
      },
      {}
    )

    return sidebarTree
  }

  render() {
    const post = this.props.data.markdownRemark
    const markdown = this.props.data.allMarkdownRemark

    const sidebarTree = this.buildSidebarTree(markdown)

    return (
      <MainLayout>
        <Sidebar tree={sidebarTree} />

        <div className={styles.contentContainer}>
          <h1>{post.frontmatter.title}</h1>

          <h2>Blueprints</h2>

          <div
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
        </div>
      </MainLayout>
    )
  }
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
