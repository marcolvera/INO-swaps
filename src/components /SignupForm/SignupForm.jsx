import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/home');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div id='signup-wrapper'>
        <div id='signupBox'>
          <h1 id='signupMainTxt'>Create Account</h1>
          <form onSubmit={this.handleSubmit} >
              <div>
                <p className='signText'>Name</p>
                <input className='signupInput' type="text" value={this.state.name} name="name" onChange={this.handleChange} />
              </div>
              <div>
                <p className='signText'>Email</p>
                <input className='signupInput' type="email" value={this.state.email} name="email" onChange={this.handleChange} />
              </div>
              <div>
                <p className='signText'>Password</p>
                <input className='signupInput' type="password"  value={this.state.password} name="password" onChange={this.handleChange} />
              </div>
              <div>
                <p className='signText'>Confirm Password</p>
                <input  className='signupInput' type="password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
              </div>
              <div>
                <button disabled={this.isFormInvalid()}>Sign Up</button>
                <Link id='signupCancel' to='/'>Cancel</Link>
              </div>
          </form>
        </div>
        <div id='signupImg'>
          <img src="https://i.imgur.com/IDrvJkg.png" alt=""/>
        </div>
      </div>
    );
  }
}
          

export default SignupForm;

          
       
          
        
       
          
          
          
         