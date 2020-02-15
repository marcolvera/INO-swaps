import React , {Component} from 'react';
import './AdminLoginPage.css';
import {Link} from 'react-router-dom';

class AdminLoginPage extends Component  {

    state ={
        password: 'admin1',
        admin: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    handleSubmit = async (e) => {
        try{
            if(this.state.password == this.state.admin) {
                this.props.history.push('/manager')
            } else {
                alert('Invalid')
            }
        } catch(err){
            console.log(err)
        }
    }

    render(){
    return(
        <div>
            <div id='adminLogin-wrapper'>
                <div id='adminLoginDiv'>
                    <form onSubmit={this.handleSubmit}>
                        <header>Enter Admin key:</header>
                        <div>
                            <input
                            id='adminLogin'
                            value={this.state.admin}
                            name='admin'
                            onChange={this.handleChange}
                            placeholder='####'
                            />
                        </div>
                    </form>
                    <button id='adminLogin-btn'>Confirm</button>
                    &nbsp;&nbsp;
                    <Link id='adminBack-link' to='/manager/login'>Back</Link>
                </div>
            </div>
        </div>
    )
}}

export default AdminLoginPage;