import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ManagerLogin.css';
import managerService from '../../utils/managerService';
import ManagerPage from '../../pages/ManagerPage/ManagerPage';

class ManagerLogin extends Component {
  
  state = {
    credentials: '',
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
      await managerService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/shifts');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }
  render() {
    return (
      <div>
        <div id='manager-wrapper'>
          <div id='managerDiv'>
            <header id='managerHeader'>Enter Credentials</header>
            <form onSubmit={this.handleSubmit}>
              <div className='managerInput'>
                <input
                className='managerLogin'
                value={this.state.credentials}
                placeholder='Credentials'
                name='credentials'
                type='text'
                onChange={this.handleChange}
                />
              </div>
              <div className='managerInput'>
                <input
                className='managerLogin'
                value={this.state.pw}
                placeholder='Password'
                name='pw'
                type='text'
                onChange={this.handleChange}
                />
              </div>
              <button className='managerLoginBtn'>Login</button>
              <div>
                <Link to='/' id='backLink'>Cancel </Link>
                <Link to='/admin/login' id='adminLink'>| Admin</Link>
              </div>
            </form>
          </div>
          <div id='managerLoginImg'>
            <img src="https://i.imgur.com/IDrvJkg.png" alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerLogin;
