import React, { Component } from 'react'
import Cards from './components/Cards';

export class App extends Component {
  render() {
    return (
      <div className='container border border-primary my-3'>
        <Cards lastName='Doe'firstName='Jane' age={45} hairColor='Black'/>
        <Cards lastName='Smith'firstName='John' age={88} hairColor='Brown'/>
        <Cards lastName='Fillmore'firstName='Millard' age={50} hairColor='Brown'/>
        <Cards lastName='Smith'firstName=' Maria' age={62} hairColor='Brown'/>
      </div>
    )
  }
}

export default App;