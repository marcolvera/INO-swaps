import React, { Component } from 'react';
import './PostShiftPage.css'
import { Link } from 'react-router-dom';

class PostShiftPage extends Component {
    state = {
      invalidForm: true,
      formData: {
        date: '',
        time: '',
      }
    };
  
    formRef = React.createRef();
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.handlePostShift(this.state.formData);
    };
  
    handleChange = e => {
      const formData = {...this.state.formData, [e.target.name]: e.target.value};
      this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
      });
    };
  
    render() {
      return (
        <div className="postContainer">
          <h1>Shift Information</h1>
          <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Shift Date:</label>
              <input
                className="form-control"
                name="date"
                value={this.state.formData.date}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Shift Time:</label>
              <input
                className="form-control"
                name="time"
                value={this.state.formData.breed}
                onChange={this.handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
            >
              Post Shift
            </button> 
          </form>
            <button><Link to='/'>Cancel</Link></button>
        </div>
      );
    }
  }


  export default PostShiftPage;