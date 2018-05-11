import React from 'react'
import { formatPrice } from './../helpers';


class Fish extends React.Component {
  render () {
    const { image, name, desc, status, price } = this.props.details
    const isAvailable = status === 'available'

    return (
      <li className="menu-fish">
        <img src={ image } alt={ name } />
        <h3 className="fish-name">
          { name }
          <span className="price">{ formatPrice(price) }</span>
        </h3>
        <p>{ desc }</p>
        <button disabled={!isAvailable}>
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
