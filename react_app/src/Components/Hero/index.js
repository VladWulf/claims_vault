import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './main.css';

export default class Hero extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Container fluid id="hero-container">
            <div id="hero-text">
                <h1>ClaimsVault</h1>
                <h4>crafted by simply hackers</h4>
            </div>
            
        </ Container>
      </div>
    )
  }
}
