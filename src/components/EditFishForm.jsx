import React from 'react'
import PropTypes from 'prop-types'

class EditFishForm extends React.Component {
  static propTypes = {
    fishKey: PropTypes.string,
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func
  }

  fishKey = this.props.fishKey

  handleChange = event => {
    const fieldName = event.target.name
    const fieldValue = event.target.value
    const updatedFish = {
        ...this.props.fish,
        [fieldName]: fieldValue
    }

    this.props.updateFish(this.fishKey, updatedFish)
  }

  deleteFish = () => {
    this.props.deleteFish(this.fishKey)
  }

  render () {
    return (
      <div className="fish-edit">
        <input
          name="name"
          value={this.props.fish.name}
          type="text" placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          name="price"
          value={this.props.fish.price}
          type="text" placeholder="Price"
          onChange={this.handleChange}
        />
        <select
          name="status"
          value={this.props.fish.status}
          type="text"
          placeholder="Status"
          onChange={this.handleChange}
        >
          <option value="available">Available</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea
          name="desc"
          value={this.props.fish.desc}
          type="text"
          placeholder="Desc"
          onChange={this.handleChange}
        ></textarea>
        <input
          name="image"
          value={this.props.fish.image}
          type="text"
          placeholder="Image"
          onChange={this.handleChange}
        />
        <button onClick={this.deleteFish}>Delete</button>
      </div>
    )
  }
}

export default EditFishForm