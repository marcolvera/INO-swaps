import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import  * as shiftAPI from '../../services/shifts-api';
import * as systemUsersAPI from '../../services/systemUsers-api';
import Homepage from '../Homepage/Homepage'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'
import PostShiftPage from '../PostShiftPage/PostShiftPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import userService from '../../utils/userService';
import EditShiftPage from '../EditShiftPage/EditShiftPage'
import ManagerLoginPage from '../ManagerLoginPage/ManagerLoginPage';
import AdminLoginPage from '../AdminLoginPage/AdminLoginPage';
import AdminPage from '../AdminPage/AdminPage';
import AddManagerPage from '../AddManagerPage/AddManagerPage';
import managerService from '../../utils/managerService';
import SystemUsersPage from '../SystemUsersPage/SystemUsersPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      shifts: [],
      users: [],
      manager: managerService.getManager(),
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



  managerLogout = () => {
    managerService.logout();
    this.setState({manager:null});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }


  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleManagerSignupOrLogin = () => {
    this.setState({manager: managerService.getManager()});
  }



    /*--- Lifecycle Methods ---*/

  async componentDidMount() {
      const shifts = await shiftAPI.getAll();
      this.setState({shifts});
      const users = await systemUsersAPI.getAll();
      this.setState({users});
      console.log(shifts)
      console.log(users)

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
              <ManagerLoginPage/>
          
            }/>
            <Route exact path='/admin/login' render={({history}) =>
            <AdminLoginPage 
            history={history}
            />
          }/>
          <Route exact path='/admin' render={() =>
          <AdminPage />
          }/>
          <Route exact path='/add/manager' render={({history}) =>
          <AddManagerPage
          history={history}
          handleManagerSignupOrLogin={this.handleManagerSignupOrLogin}
          />
          }/>
          <Route exact path='/system/users' render={() =>
          <SystemUsersPage 
          users={this.state.users}/>
          }/>
    </Switch>
    </div>
  )
}
}
            


export default App;
