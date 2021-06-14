import "./App.css";
import "./index.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { loggedin } from "./api";
import AddContact from "./components/AddContact";
import About from "./components/About";
import City from "./components/City";
import CityConnections from "./components/CityConnections";
import EditProfile from "./components/EditProfile";
import Login from "./components/Login";
import Main from "./components/Main"; //city search, city list, contact, user profile
import MyContacts from "./components/MyContacts"; // contacts page
import Navbar from "./components/Navbar"
import Signup from "./components/Signup";

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

  // getAllCities = async () => {
  //   const getCities 
  // }
  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="app">
        <Navbar
          loggedInUser={loggedInUser}
          setCurrentUser={this.setCurrentUser}
          />
        <Switch>
                  {/* SIGNUP */}
          <Route exact path="/signup" component={Signup} />
                  {/* LOGIN */}
          <Route exact path="/login"
            render={ (props) => {
              return <Login {...props} 
                setCurrentUser={this.setCurrentUser} 
                loggedInUser={loggedInUser}/>}
              }/>
          <Route exact path="/about" component={About} />
          <Route exact path="/mycontacts" render={(props) => {
              return <MyContacts {...props}  
                loggedInUser={loggedInUser}/>
            }}/>
          <Route exact path="/editprofile" render={(props) => {
              return <EditProfile {...props}  
                loggedInUser={loggedInUser}/>
            }}/>
          <Route exact path="/c/:city" render={(props) => {
              return <City {...props}  
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
        </Switch>
      </div>
    );
  }
}

export default App;
