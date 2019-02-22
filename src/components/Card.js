import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super()
    this.state = {
      title: 'Initial',
      priority: 0
    }
  }

  render(){
    return (
      <div style={{'background-color': 'pink', 'width': '250px', 'padding': '10px', 'margin': '10px'}}>
        Title: {this.props.info.title} <br/>
        Priority: {this.props.info.priority} 
      </div>   
    )
  }
}

export default Card;