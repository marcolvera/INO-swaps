import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import  * as shiftAPI from '../../services/shifts-api';
import Homepage from '../Homepage/Homepage'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'
import PostShiftPage from '../PostShiftPage/PostShiftPage'
import userService from '../../utils/userService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      shifts: []
    };
  }


  handlePostShift = async newShiftData => {
    const newShift = await shiftAPI.create(newShiftData);
    this.setState(state => ({
      shifts: [...this.state.shifts, newShift]
    }),
    () => this.props.history.push('/'));
  }




  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }


  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }


  render() {
    return (
      <div>
         <Switch>
        <Route exact path='/' render={() =>
        <Homepage 
              handleLogout={this.handleLogout}
              user={this.state.user}
        />
        }/>
        <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/post' render={() => 
            <PostShiftPage
              handlePostShift={this.handlePostShift}
                />
          }/>
      </Switch>
      </div>
    )
  }
}


export default App;
