import React from 'react'

class StorePicker extends React.Component {
  render () {
    return (
      <form className="store-selector">
        <h1>Please Enter A Store</h1>
        <input type="text" required placeholder="Enter store name" />
        <button type="submit">Visit Store ➡</button>
      </form>
    )
  }
}

export default StorePicker