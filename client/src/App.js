import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";

// Components and pages
import Nav from "./components/Nav";
import UsersPage from "./pages/UsersPage";
import ItemsPage from "./pages/ItemsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

// Redux imports
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

const App = () => {
  useEffect(() => {
    // load user if authenticated
    store.dispatch(loadUser());
    // eslint-disable-next-line
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <div id="main">
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/users">
              <UsersPage />
            </Route>
            <Route path="/items">
              <ItemsPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/">
              <h1>HOME</h1>
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
