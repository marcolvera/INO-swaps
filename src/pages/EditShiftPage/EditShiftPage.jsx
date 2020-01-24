import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './EditShiftPage.css'

class EditShiftPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.shift
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateShift(this.state.formData);
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
         
        <h1 className="header">Edit Shift</h1>
        
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="editBox">
          <div className="form-group">
            <label>Date:</label>
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
            <label>Time:</label>
            <input
            
              className="form-control"
              name="time"
              value={this.state.formData.time}
              onChange={this.handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            Update
          </button>&nbsp;&nbsp;
          <Link className="editLink" to='/profile'>CANCEL</Link>
          </div>
        </form>
      </div>
    );
  }
}
export default EditShiftPage;