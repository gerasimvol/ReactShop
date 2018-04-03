import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  storeName = React.createRef()

  goToStore = event => {
    event.preventDefault()
    this.props.history.push(`/store/${this.storeName.value.value}`)
  }

  render () {
    return (
      <form className="store-selector" onSubmit={ this.goToStore }>
        <h1>Please Enter A Store</h1>
        <input
          type="text"
          required
          ref={this.storeName}
          placeholder="Enter store name"
          defaultValue={ getFunName() }
        />
        <button type="submit">Visit Store ➡</button>
      </form>
    )
  }
}

export default StorePicker