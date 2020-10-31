import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import PrivateRoute from './components/PrivateRoute';
import SignUpForm from './components/auth/SignUpForm';
import Selection from './components/Selection';
import Homepage from './components/Homepage';
import SplashPage from './components/SplashPage';
import LogInForm from './components/auth/LogInForm';
import ActionPage from './components/movie-genres/action/ActionPage';


const App = (props) => { 
  let userName = window.localStorage.getItem("IMDB_USERNAME");
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <SplashPage isLoggedIn={props.token} />} />
        <Route exact path="/action" component={ActionPage} />
        <ProtectedRoute isLoggedIn={props.token} exact path={`/selection/${userName}`} render={() => <Selection userName={userName} />} />
        <PrivateRoute isLoggedIn={props.token} exact path={`/homepage/${userName}`} render={() => <Homepage userName={userName} />} />
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
