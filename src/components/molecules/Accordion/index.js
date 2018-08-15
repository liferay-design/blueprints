import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

export default class Accordion extends Component {
  constructor() {
    super()

    this.state = {
      showChildren: false,
    }

    this.toggleVisibility = this.toggleVisibility.bind(this)
  }
  toggleVisibility() {
    this.setState({ showChildren: !this.state.showChildren })
  }
  render() {
    return (
      <div className={styles.accordion}>
        <Link to={this.props.link}>
          <h3 onClick={this.toggleVisibility}>{this.props.title}</h3>
        </Link>

        <div
          className={this.state.showChildren ? styles.visible : styles.hidden}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
