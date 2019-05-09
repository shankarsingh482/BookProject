import React from 'react';
import { Form , Button, Message } from 'semantic-ui-react'
import InlineError from '../message/InlineError'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
  state={
    data:{
      email:'',
      password:''
    },
    loading:false,
    errors:{}
  };

  onChange = e =>
  {
      this.setState({data:{...this.state.data,[e.target.name]:e.target.value}})
  }
  onSubmit = () =>
  {
      const errors = this.validate(this.state.data);
      this.setState({errors});
      if(Object.keys(errors).length === 0)
      {
        //if there is any error js will find it and set the state for errors.
        this.props.submit(this.state.data).catch(err => console.log('error is',err))
      }

  }
  validate = (data) =>
{  const errors ={};
  if(!data.email) errors.email="Email can't empty";
  if(!data.password) errors.password="Can't be blank";
  return errors;
}
  render() {
    const {data , errors}= this.state;
    return (
      <Form onSubmit={this.onSubmit}>
      {errors.global && (<Message negative><Message.Header>Something Went Wrong</Message.Header>
      <p>{errors.global}</p>
      </Message>)}
      <Form.Field error = {!!errors.email}>
        <label htmlFor="email">Email</label>
         <input type="email" id="email" name="email" placeholder="example@example.com"
           value={data.email}
           onChange={this.onChange}/>
        {errors.email && <InlineError text ={errors.email}/>}
        </Form.Field>
        <Form.Field error = {!!errors.password}>
        <label htmlFor="password">password</label>
         <input type="password" id="password" name="password" placeholder="make it secure"
           value={data.password}
           onChange={this.onChange}/>
           {errors.password && <InlineError text ={errors.password}/>}
        </Form.Field>
          <Button primary onSubmit={this.onSubmit}>Login</Button>
      </Form>
    )
  }
}
LoginForm.propTypes = {
  submit:PropTypes.func.isRequired
}
export default LoginForm
