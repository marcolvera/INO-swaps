import React, { Component } from 'react';
import ManagerForm from '../../components /ManagerForm/ManagerForm'
import './AddManagerPage.css';

class AddManagerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
        <ManagerForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default AddManagerPage;
          

