import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <div>
        <Link to={`/`}>
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>

        <Link to={`/page-2/`}>About</Link>

        {children}
      </div>
    )}
  />
)
