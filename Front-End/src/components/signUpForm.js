import React from 'react';
import { connect } from 'react-redux';
import { updateEmailValue, updateUserNameValue, updatePasswordValue, updateCPValue, signUp } from '../store/actions/auth';

const signUpForm = (props) => {
    return (
        <div>
            <form className="create-user-form">
                <h1 className="new-user-page">Sign Up to See Your Recommended List with IMDB Lite!</h1>
                <label for="email">Email</label>
                <input onChange={props.updateEmailValue} value={props.email} type="email" name="email" id="emailField" className="sign-up-form" placeholder="imdblite@example.com" required />
                <label for="userName">Username</label>
                <input onChange={props.updateUserNameValue} value={props.userName} type="text" name="userName" id="userNameField" className="sign-up-form" placeholder="IMDB" required />
                <label for="password">Password</label>
                <input onChange={props.updatePasswordValue} value={props.password} type="password" name="password" id="passwordField" className="sign-up-form" required />
                <label for="confirmedPassword">Confirm Password</label>
                <input onChange={props.updateCPValue} value={props.CP} type="password" name="confirmedPassword" id="cpField" className="sign-up-form" required />
                <button onClick={props.signUp} className="create-user-button">Create</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        userName: state.auth.userName,
        password: state.auth.password,
        CP: state.auth.CP
    }
}

const mapDispatchToProps = dispatch => {
    return (
        {
            updateEmailValue: (event) => dispatch(updateEmailValue(event.target.value)),
            updateUserNameValue: (event) => dispatch(updateUserNameValue(event.target.value)),
            updatePasswordValue: (event) => dispatch(updatePasswordValue(event.target.value)),
            updateCPValue: (event) => dispatch(updateCPValue(event.target.value)),
            signUp: () => dispatch(signUp()),
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(signUpForm);