import React, { Component } from 'react'

export class Cards extends Component {
  render() {
    return (
      <div className='card'>
        <div className="card-body">
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
        </div>
      </div>
    )
  }
}

export default Cards