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
    this.setState({ fishes })
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = fishKey => {
    const order = { ...this.state.order }
    order[fishKey] = order[fishKey] + 1 || 1
    this.setState({ order })
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
                    fishKey={fishKey}
                    details={this.state.fishes[fishKey]}
                    addToOrder={this.addToOrder}
                  />
                )
              })
            }
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App
