import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import  * as shiftAPI from '../../services/shifts-api';
import Homepage from '../Homepage/Homepage'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'
import PostShiftPage from '../PostShiftPage/PostShiftPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import userService from '../../utils/userService';
import EditShiftPage from '../EditShiftPage/EditShiftPage'
import ManagerPage from '../ManagerPage/ManagerPage'
import AdminLoginPage from '../AdminLoginPage/AdminLoginPage';


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
    () => this.props.history.push('/home'));
    console.log(newShift)
  }




  handleDeleteShift=  async id => {
    await shiftAPI.deleteOne(id);
    this.setState(state => ({
      shifts: state.shifts.filter(s => s._id !== id)
    }), () => this.props.history.push('/profile'));
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

   
        <Route exact path='/home' render={() =>
          <Homepage 
              handleLogout={this.handleLogout}
              user={this.state.user}
              shifts={this.state.shifts}
              handleDeleteShift={this.handleDeleteShift}
        />
        }/>
        <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/' render={({ history }) => 
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
          <Route exact path='/profile' render={() => 
            <ProfilePage
            user={this.state.user}
            shifts={this.state.shifts}
            handleDeleteShift={this.handleDeleteShift}  
            handleUpdateShift={this.handleUpdateShift}
            
              />
          }/>
            <Route exact path='/edit' render={({location}) => 
            <EditShiftPage
              handleUpdateShift={this.handleUpdateShift}
              location={location}
              // state={shift}
              
            />
          } />
            <Route exact path='/manager/login' render={() =>
              <ManagerPage />
            }/>
            <Route exact path='/admin' render={() =>
            <AdminLoginPage />
          }/>
    </Switch>
    </div>
  )
}
}
            


export default App;
