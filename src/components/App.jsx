import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'
import base from '../base'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  storeName = this.props.match.params.storeId

  componentDidMount () {
    const localStorageOrder = localStorage.getItem(this.storeName)
    if (localStorageOrder) {
      this.setState({ order: JSON.parse(localStorageOrder) })
    }

    this.ref = base.syncState(`${this.storeName}/fishes`, {
      context: this,
      state: 'fishes'
    })
  }

  componentDidUpdate () {
    localStorage.setItem(
      `${this.storeName}`,
      JSON.stringify(this.state.order)
    )
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes }
    fishes[`fish${Date.now()}`] = fish
    this.setState({ fishes })
  }

  updateFish = (fishKey, updatedFish) => {
    const fishes = { ...this.state.fishes }
    fishes[fishKey] = updatedFish
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
          fishes={this.state.fishes}
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App
