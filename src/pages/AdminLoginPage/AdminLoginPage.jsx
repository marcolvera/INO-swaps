import React , {Component} from 'react';
import './AdminLoginPage.css';

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
            <form onSubmit={this.handleSubmit}>
                <input
                value={this.state.admin}
                name='admin'
                onChange={this.handleChange}
                />
            </form>
        </div>
    )
}}

export default AdminLoginPage;