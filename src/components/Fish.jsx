import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from './../helpers';


class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func,
    fishKey: PropTypes.string
  }

  render () {
    const { image, name, desc, status, price } = this.props.details
    const fishKey = this.props.fishKey
    const isAvailable = status === 'available'

    return (
      <li className="menu-fish">
        <img src={ image } alt={ name } />
        <h3 className="fish-name">
          { name }
          <span className="price">{ formatPrice(price) }</span>
        </h3>
        <p>{ desc }</p>
        <button
          disabled={!isAvailable}
          onClick={() => { this.props.addToOrder(fishKey) }}
        >
          {
            isAvailable
              ? 'Add To Cart'
              : 'Sold out!'
          }
        </button>
      </li>
    )
  }
}

export default Fish
