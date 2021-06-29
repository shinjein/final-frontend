import React from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import { loggedin } from "./api";
import About from "./components/About";
import Login from "./components/Login";
import Navbar from "./components/Navbar"
import Signup from "./components/Signup";
import AddContact from "./components/AddContact";
import City from "./components/City";
import CityContacts from "./components/CityContacts";
import CityConnections from "./components/CityConnections";
import UserProfile from "./components/UserProfile";
import Main from "./components/Main"; //city search, city list, contact, user profile
import MyContacts from "./components/MyContacts"; // contacts page

class App extends React.Component {
  state = {
    loggedInUser: null,
  };

  async componentDidMount() {
    if (this.state.loggedInUser === null) {
      const response = await loggedin();
      if (response.data._id) {
        this.setCurrentUser(response.data);
      }
    }
  }
  setCurrentUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };
  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="app">
        <Navbar
          loggedInUser={loggedInUser}
          setCurrentUser={this.setCurrentUser}
          />
        <Switch>
          <Route key="/signup" exact path="/signup" component={Signup}/>
          <Route key="/about" exact path="/about" component={About}/>
          <Route exact path="/login"
            render={ (props) => {
              return <Login {...props} 
                setCurrentUser={this.setCurrentUser} 
                loggedInUser={loggedInUser}/>}
              }/>
          <Route exact path="/mycontacts" render={(props) => {
            return <MyContacts {...props}  
            loggedInUser={loggedInUser}/>
          }}/>
          <Route exact path="/profile" render={(props) => {
            return <UserProfile {...props}  
            loggedInUser={loggedInUser}/>
          }}/>
          <Route exact path="/c/:city" render={(props) => {
            return <CityContacts {...props}  
            loggedInUser={loggedInUser}/>
          }}/>
          <Route exact path="/c/:city/:contact" render={(props) => {
            return <CityConnections {...props}  
            loggedInUser={loggedInUser}/>
          }}/>
          <Route exact path="/addcontact" render={(props) => {
            return <AddContact {...props}  
            loggedInUser={loggedInUser}/>
          }}/>
          <Route exact
            path="/:username"
            render={(props) => {
            return <Main {...props} 
            setCurrentUser={this.setCurrentUser} 
            loggedInUser={loggedInUser}/>
          }}/>
          <Route exact path="/c/:city/details" render={(props) => {
            return <City {...props}  
            loggedInUser={loggedInUser}/>
          }}/>
        </Switch> 
      </div>
    );
  }
}

export default App;
