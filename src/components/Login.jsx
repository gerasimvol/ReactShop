import React from 'react'
import PropTypes from 'prop-types'

const Login = props => {
  return (
    <nav className="login">
      <h2>Login</h2>
      <h3>Sign in to manage inventory</h3>
      {/* <button className="github" onClick={() => props.authenticate('Github')}>Login with GitHub</button> */}
      <button className="facebook" onClick={() => props.authenticate('Facebook')}>Login with Facebook</button>
    </nav>
  )
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login