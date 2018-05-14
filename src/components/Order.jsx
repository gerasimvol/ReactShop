import React from 'react'
import { formatPrice } from './../helpers';

class Order extends React.Component {
  renderOrder = fishId => {
    const fish = this.props.fishes[fishId]
    const count = this.props.order[fishId]
    const isAvailable = fish && fish.status === 'available'

    if (!isAvailable) {
      return <li key={fishId}>Sorry, { fish ? fish.name : 'fish' } is no longer available</li>
    } else {
      return (
        <li key={fishId}>
          <span>{ count } lbs { fish.name }</span>
          
          { formatPrice(count * fish.price) }
        </li>
      )
    }
  }

  render () {
    const orderIds = Object.keys(this.props.order)
    const totalCost = orderIds.reduce((total, fishId) => {
      const fish = this.props.fishes[fishId]
      const count = this.props.order[fishId]
      const isAvailable = fish && fish.status === 'available'

      if (isAvailable) {
        total += (count * fish.price)
      }
      return total
    }, 0)

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          { orderIds.map(this.renderOrder) }
        </ul>
        <div className="total">
          Total: <strong>{ formatPrice(totalCost) }</strong>
        </div>
      </div>
    )
  }
}

export default Order
