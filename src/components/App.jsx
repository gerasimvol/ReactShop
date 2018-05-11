import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes }
    fishes[`fish${Date.now()}`] = fish
    this.setState({
      fishes
    })
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = () => {
    
  }

  render () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header
            tagline="Vol Fish Food"
          />
          <ul className="fishes">
            {
              Object.keys(this.state.fishes).map(fishKey => {
                return (
                  <Fish
                    key={fishKey}
                    details={this.state.fishes[fishKey]}
                  />
                )
              })
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App
