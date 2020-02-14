import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/home');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      alert('Invalid Credentials!');
    }
  }
  render() {
    return (
      <div>
        <div id='login-wrapper'>
          <div id='loginDiv'>
            <header id='headerLogin'>AssociateLogin</header>
            <form onSubmit={this.handleSubmit}>
              <div className='loginInput'>
                <input
                className='login'
                value={this.state.email}
                placeholder='Email'
                name='email'
                type='text'
                onChange={this.handleChange}
                />
              </div>
              <div className='loginInput'>
                <input
                className='login'
                value={this.state.pw}
                placeholder='Password'
                name='pw'
                type='text'
                onChange={this.handleChange}
                />
              </div>
              <button className='loginBtn'>Login</button>
              <div>
                <Link to='/signup' id='userLink'>New User </Link>
                <Link to='/manager' id='managerLink'>| Manager</Link>
              </div>
            </form>
          </div>
          <div id='loginImg'>
            <img src="https://i.imgur.com/IDrvJkg.png" alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

