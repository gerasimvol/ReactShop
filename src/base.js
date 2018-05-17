import firebase from 'firebase'
import Rebase from 're-base'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbp8mHv_eZAFOKc4EnGPwSsBCUNj6LBHI",
  authDomain: "reactshop-3d7dc.firebaseapp.com",
  databaseURL: "https://reactshop-3d7dc.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base