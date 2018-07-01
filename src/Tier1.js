import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  handleClick = (event) => {
    if (event.target.className === 'tier1') {
      console.log('tier 1 handler running');
      this.setState({color: getRandomColor()}, () => this.setState({
        childColor: getReducedColor(this.state.color)
      }))
    }
  }

  handleNestedClick = (event) => {
  if (event.target.className === 'tier2') {
    console.log(`handling nested click in tier 1`, event.target.className);
    this.setState({
      childColor: getRandomColor()
    })
  }
}

  render() {
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} handleNestedClick={this.handleNestedClick} />
        <Tier2 color={this.state.childColor} handleNestedClick={this.handleNestedClick} />
      </div>
    )
  }
}
