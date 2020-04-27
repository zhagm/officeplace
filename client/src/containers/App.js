import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";

// Components and Containers
import Nav from "../components/Nav";
import PrivateRoute from "../components/PrivateRoute";
import UsersPage from "./UsersPage";
import ItemsPage from "./ItemsPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import NotFoundPage from "./NotFoundPage";
import ChatPage from "./ChatPage";

// Redux Imports
import { loadUser } from "../actions/authActions";
import { connect } from "react-redux";
import store from "../store";

// Socket.io Imports
// import socketio from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:4000";

const App = ({ isAuthenticated }) => {
  useEffect(() => {
    // load user if authenticated
    store.dispatch(loadUser());
    // const socket = socketio(ENDPOINT);
    // socket.on("message", (message) => {
    //   console.log(message);
    // });
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Nav isAuthenticated={isAuthenticated} />
      <div id="main">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute
            path="/users"
            comp={UsersPage}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/chat"
            comp={ChatPage}
            isAuthenticated={isAuthenticated}
          />
          <Route path="/items" component={ItemsPage} />
          <Route path="/register" component={RegisterPage} />
          <Route exact path="/">
            <h1>HOME</h1>
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);