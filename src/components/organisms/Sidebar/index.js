import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Sidebar } from 'semantic-ui-react'
import { Accordion } from 'components/molecules'
import { map } from 'lodash'
import { Link } from 'gatsby'

const SidebarContent = ({ tree }) => {
  return map(tree, node => {
    if (node.hasOwnProperty('children')) {
      return (
        <Accordion key={node.title} link={node.slug} title={node.title}>
          <SidebarContent tree={node.children} />
        </Accordion>
      )
    }

    return (
      <Link key={node.title} to={node.slug}>
        <h3>{node.title}</h3>
      </Link>
    )
  })
}

export default class SidebarWrapper extends Component {
  constructor() {
    super()

    this.state = { visible: true }
  }

  render() {
    return (
      <Sidebar
        className={styles.sidebar}
        visible={this.state.visible}
        width="wide"
      >
        <SidebarContent tree={this.props.tree} />
      </Sidebar>
    )
  }
}
