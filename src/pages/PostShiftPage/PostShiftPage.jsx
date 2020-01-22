import React, { Component } from 'react';
import './PostShiftPage.css'
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class PostShiftPage extends Component {
    state = {
      invalidForm: true,
      formData: {
        date: '',
        time: '',
        comment: '',
        owner: userService.getUser()
       
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
        <div>
        <h1 className="infoBox">Shift Information</h1>
        <div className="postContainer">
          <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Shift Date:</label>
              <input
                className="form-control"
                type="date"
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
                value={this.state.formData.time}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
            <label>Comment:</label>
            <textarea
              className="form-control"
              name="comment"
              value={this.state.formData.comment}
              onChange={this.handleChange}
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
            <button><Link to='/home'>Cancel</Link></button>
        </div>
        </div>
      );
    }
  }


  export default PostShiftPage;