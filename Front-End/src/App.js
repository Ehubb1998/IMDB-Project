import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import PrivateRoute from './components/PrivateRoute';
import signUpForm from './components/signUpForm';
import Selection from './components/Selection';
import Homepage from './components/Homepage';
import SplashPage from './components/SplashPage';
import logInForm from './components/logInForm';

let userName;
const userId = window.localStorage.getItem("IMDB_USER_ID");
if (userId) {
  const user = async () => {
    const res = await fetch(`http://localhost:8081/users/${userId}`);
    userName = res;
  }
}

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SplashPage} />
        <ProtectedRoute isLoggedIn={props.token} exact path={`/selection/${userName}`} render={() => <Selection userName={userName} />} />
        <PrivateRoute isLoggedIn={props.token} exact path={`/homepage/${userName}`} render={() => <Homepage userName={userName} />} />
        <Route exact path="/sign-up" component={signUpForm} />
        <Route exact path="/log-in" component={logInForm} />
      </Switch>
    </BrowserRouter>
  )
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(App);
