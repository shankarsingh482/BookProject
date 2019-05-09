import React from 'react';
import LoginForm from '../forms/LoginForm'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {login} from '../../actions/auth';
class LoginPage extends React.Component
{

  /**
   * the purpose of this is to take data after submitting the login button
   * and if everyting is fine then redirect this page to home page.
   * For redirecting we are using history.push method
   */

submit = (data) =>
{
    this.props.login(data).then(()=> this.props.history.push("/"));
}

render()
{
  return (
<div>
  <h1>LoginPage</h1>
  <LoginForm submit ={this.submit}/>
</div>
  )
}
}

LoginPage.propTypes={
  history:PropTypes.shape({
    push:PropTypes.func.isRequired
  }).isRequired,
  login:PropTypes.func.isRequired
}
export default connect(null, {login})(LoginPage)
