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
      shifts: [...state.shifts, newShift]
    }),
    () => this.props.history.push('/'));
    console.log(newShift)
  }




  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }


  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }



    /*--- Lifecycle Methods ---*/

  async componentDidMount() {
      const shifts = await shiftAPI.getAll();
      this.setState({shifts});
      console.log(shifts)
    }



  render() {
    return (
      <div>
         <Switch>
        <Route exact path='/' render={() =>
        <Homepage 
              handleLogout={this.handleLogout}
              user={this.state.user}
              shifts={this.state.shifts}
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
              user={this.state.user}
                />
          }/>
      </Switch>
      </div>
    )
  }
}


export default App;
