import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

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

	render={ data => (
		<div
			className={css`
				margin: 0 auto;
				max-width: 700px;
				padding: ${rhythm(2)};
				padding-top: ${rhythm(1.5)};
			`}
		>
			<Link to={`/`}>
				<h3
					className={css`
						margin-bottom: ${rhythm(2)};
						display: inline-block;
						font-style: normal;
					`}
				>
					{data.site.siteMetadata.title}
				</h3>
			</Link>
				<h2>{data.site.siteMetadata.author}</h2>
			<Link
				to={`/page-2/`}
				className={css`
					float: right;
				`}
			>
				About
			</Link>
			{children}
		</div>
	)}
	/>
)