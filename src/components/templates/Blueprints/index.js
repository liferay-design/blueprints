import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import { Sidebar } from 'semantic-ui-react'
import MainLayout from '../MainLayout'
import classes from './styles.module.scss'
import { cloneDeep, get, set } from 'lodash'

function upsertAtPath(path, value, obj) {
  obj = cloneDeep(obj)
  const pathValue = get(obj, path)

  if (!pathValue) {
    set(obj, path, value)
  } else {
    set(obj, path, { ...pathValue, ...value })
  }

  return obj
}

const path1 = 'guidelines'
const path2 = 'guidelines.children.color'
const obj2 = upsertAtPath(
  path1,
  { title: 'guidelines', slug: '/guidelines' },
  {}
)
const obj3 = upsertAtPath(
  path2,
  { title: 'color', slug: '/guidelines/color' },
  obj2
)

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

    this.buildSidebarTree(markdown)

    return (
      <MainLayout>
        <div>
          <Sidebar visible width="wide">
            {markdown.edges.map(({ node }) => (
              <Link key={node.id} to={node.fields.slug}>
                <h3>{node.frontmatter.title}</h3>
              </Link>
            ))}
          </Sidebar>

          <div className={classes.contentContainer}>
            <h1>{post.frontmatter.title}</h1>

            <h2>Blueprints</h2>

            <div
              dangerouslySetInnerHTML={{
                __html: post.html,
              }}
            />
          </div>
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
