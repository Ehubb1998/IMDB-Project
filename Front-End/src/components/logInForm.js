import React from 'react';
import { connect } from 'react-redux';
import { updateUserNameValue, updatePasswordValue, logIn } from '../store/actions/auth';

const logInForm = (props) => {
    return (
        <div>
            <form className="log-in-form">
                <h1 className="log-in-page">Sign in to IMDB Lite</h1>
                <label for="userName">Username</label>
                <input onChange={props.updateUserNameValue} value={props.userName} type="text" name="userName" id="userNameField" className="log-in-form" placeholder="IMDB" required />
                <label for="password">Password</label>
                <input onChange={props.updatePasswordValue} value={props.password} type="password" name="password" id="passwordField" className="log-in-form" required />
                <button onClick={props.logIn} className="log-in-button">Create</button>
                <button onClick={props.} className="demoButton">Demo</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userName: state.auth.userName,
        password: state.auth.password,
    }
}

const mapDispatchToProps = dispatch => {
    return (
        {
            updateUserNameValue: (event) => dispatch(updateUserNameValue(event.target.value)),
            updatePasswordValue: (event) => dispatch(updatePasswordValue(event.target.value)),
            logIn: () => dispatch(logIn()),
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(logInForm);