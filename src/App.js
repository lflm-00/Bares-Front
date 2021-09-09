import React from "react";
import AppEnd from "./components/Nota/AppEnd";

import Register from "../src/components/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/User/Home";
import AuthProvider from "./auth/AuthProvider";
import PrivateRoute from "./auth/PrivateRoute";
import NotFound from "./components/User/NotFound";
import PublicRoute from "./auth/PublicRoute";
import Developers from "./components/Developers";


const App = () => {

  return (
    <AuthProvider >
      <Router>
        <Switch>
          <Route exact path="/signin">
            <Redirect to="/" />
          </Route>
          <Route exact path="/login">
            <Redirect to="/" />
          </Route>

          /* Public routes for unauthenticated users */
          <PublicRoute exact path="/register" component={Register} />
          <PublicRoute exact path="/developers" component={Developers} />

          <Route exact path="/" component={AppEnd} AppEnd />

          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute path="*" component={NotFound} />


        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
