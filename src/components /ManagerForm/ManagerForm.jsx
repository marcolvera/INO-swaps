import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import managerService from '../../utils/managerService';


class ManagerForm extends Component {

  state = {
    name: '',
    credential: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
        [e.target.name]: e.target.value
      });
    }


  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await managerService.signup(this.state);
      this.props.handleManagerSignupOrLogin();
      this.props.history.push('/admin');
    } catch (err) {
        this.props.updateMessage(err.message);
      }
    }
      
      
  

  isFormInvalid() {
    return !(this.state.name && this.state.credential && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <div id='signup-wrapper'>
          <div id='signupBox'>
            <h1 id='signupMainTxt'>Create Account</h1>
            <form onSubmit={this.handleSubmit} >
                <div>
                  <p className='signText'>Name</p>
                  <input className='signupInput' type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                </div>
                <div>
                  <p className='signText'>Credentials</p>
                  <input className='signupInput' type="text" value={this.state.credential} name="credential" onChange={this.handleChange} />
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
                  <Link id='signupCancel' to='/admin'>Cancel</Link>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerForm;
     
