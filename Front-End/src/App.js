import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import PrivateRoute from './components/PrivateRoute';
import SignUpForm from './components/SignUpForm';
import Selection from './components/Selection';
import Homepage from './components/Homepage';
import SplashPage from './components/SplashPage';
import LogInForm from './components/LogInForm';


const App = (props) => {
  let userName;
  let userId = window.localStorage.getItem("IMDB_USER_ID");
  const user = async () => {
    const res = await fetch(`http://localhost:8081/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let { userName } = await res.json();
    // console.log(userName);
    userName = userName;
  }
  user();
  
console.log(userName);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <ProtectedRoute isLoggedIn={props.token} exact path={`/selection/${""}`} render={() => <Selection userName={userName} />} />
        <PrivateRoute isLoggedIn={props.token} exact path={`/homepage/${""}`} render={() => <Homepage userName={userName} />} />
        <Route exact path="/sign-up" render={() => <SignUpForm />} />
        <Route exact path="/log-in" component={LogInForm} />
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
