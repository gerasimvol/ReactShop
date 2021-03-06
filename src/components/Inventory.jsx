import React from 'react'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'
import Login from './Login'
import firebase from 'firebase'
import base, { firebaseApp } from '../base'

class Inventory extends React.Component {

  state = {
    uid: '',
    owner: ''
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user })
      }
    })
  }

  authHandler = async (authData) => {
    const store = await base.fetch(this.props.storeName, { context: this })
    if (!store.owner) {
      await base.post(`${this.props.storeName}/owner`, {
        data: authData.user.uid
      })
    }
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    })
  }

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler)
  }

  logout = async () => {
    await firebase.auth().signOut()
    this.setState({
      uid: null
    })
  }

  render () {
    const logout = <button onClick={this.logout}>Log out!</button>

    if (!this.state.uid) {
      return <Login authenticate={this.authenticate}/>
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <h3>You are not owner</h3>
          { logout }
        </div>
      )
    }

    return (
      <div className="inventory">
        <h2>Inventory</h2>
        { logout }
        {
          Object.keys(this.props.fishes).map(
            (fishKey, i) => {
              return <EditFishForm
                updateFish={this.props.updateFish}
                deleteFish={this.props.deleteFish}
                fish={this.props.fishes[fishKey]}
                fishKey={fishKey}
                key={fishKey}
              />
            }
          )
        }

        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory
