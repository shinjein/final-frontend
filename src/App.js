import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Main from "./components/Main"
// import Navbar from "./components/Navbar";
// import ListedCities from "./components/ListedCities";
import { loggedin } from "./api";


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
      <div className="App">
        <Main
          loggedInUser={loggedInUser}
          setCurrentUser={this.setCurrentUser}
          />
        <Switch>
          {/* SIGNUP */}
          <Route exact
            path="/signup" 
            component={Signup} />
          {/* LOGIN */}
          <Route exact
            path="/login"
            render={ (props) => {
              return <Login {...props} 
                setCurrentUser={this.setCurrentUser} 
                />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
