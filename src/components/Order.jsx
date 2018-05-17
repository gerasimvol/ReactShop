import React from 'react'
import { formatPrice } from './../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class Order extends React.Component {
  renderOrder = fishId => {
    const fish = this.props.fishes[fishId]
    if(!fish) return null

    const count = this.props.order[fishId]
    const isAvailable = fish && fish.status === 'available'
    const transitionOptions = {
      classNames: "order",
      key: fishId,
      timeout: {enter: 500, exit: 500}
    }

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={fishId}>Sorry, { fish ? fish.name : 'fish' } is no longer available</li>
        </CSSTransition>
      )
    } else {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={fishId}>
            <span>
              <TransitionGroup component="span" className="count">
                <CSSTransition classNames="count" key={count} timeout={{enter: 500, exit: 500}}>
                  <span>{ count }</span>
                </CSSTransition>
              </TransitionGroup>
              lbs { fish.name }
              { formatPrice(count * fish.price) }
              <button  onClick={() => { this.props.removeFromOrder(fishId) }}>
                Remove
              </button>
            </span>
          </li>
        </CSSTransition>
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
        <TransitionGroup component="ul" className="order">
          { orderIds.map(this.renderOrder) }
        </TransitionGroup>
        <div className="total">
          Total: <strong>{ formatPrice(totalCost) }</strong>
        </div>
      </div>
    )
  }
}

export default Order
