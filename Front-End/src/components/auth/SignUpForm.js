import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateEmailValue, updateUserNameValue, updatePasswordValue, updateCPValue, signUp } from '../../store/actions/auth';

const SignUpForm = (props) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");


    useEffect(() => {
        if (props.msg) {
            const errDiv = window.document.querySelector(".errDiv");
            const errTitle = window.document.createElement("h4")
            const invalidCred = window.document.createElement("li");
            errTitle.innerHTML = `${props.title}`;
            errTitle.setAttribute("style", "font-size: 30px;font-weight: 700;color: red");
            invalidCred.innerHTML = `${props.msg}`;
            invalidCred.setAttribute("style", "font-size: 20px;color: black");
            errDiv.innerHTML = "";
            errTitle.appendChild(invalidCred);
            errDiv.appendChild(errTitle);
        }
    }, [props.msg])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp(userName, email, password, confirmedPassword);
    }

    const updateUserName = (e) => {
        setUserName(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const updateConfirmedPassword = (e) => {
        setConfirmedPassword(e.target.value);
    }

    return (
        <div>
            <form className="create-user-form">
                <h1 className="new-user-page">Sign Up to See Your Recommended List with IMDB Lite!</h1>
                <div className="errDiv"></div>
                <label htmlFor="email">Email</label>
                <input onChange={updateEmail} value={email} type="email" name="email" id="emailField" className="sign-up-form" placeholder="imdblite@example.com" required />
                <label htmlFor="userName">Username</label>
                <input onChange={updateUserName} value={userName} type="text" name="userName" id="userNameField" className="sign-up-form" placeholder="IMDB" required />
                <label htmlFor="password">Password</label>
                <input onChange={updatePassword} value={password} type="password" name="password" id="passwordField" className="sign-up-form" required />
                <label htmlFor="confirmedPassword">Confirm Password</label>
                <input onChange={updateConfirmedPassword} value={confirmedPassword} type="password" name="confirmedPassword" id="cpField" className="sign-up-form" required />
                <button onClick={handleSubmit} className="create-user-button">Create</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        userName: state.auth.userName,
        password: state.auth.password,
        CP: state.auth.CP,
        title: state.auth.title,
        msg: state.auth.msg,
    }
}

const mapDispatchToProps = dispatch => {
    return (
        {
            updateEmailValue: (event) => dispatch(updateEmailValue(event.target.value)),
            updateUserNameValue: (event) => dispatch(updateUserNameValue(event.target.value)),
            updatePasswordValue: (event) => dispatch(updatePasswordValue(event.target.value)),
            updateCPValue: (event) => dispatch(updateCPValue(event.target.value)),
            signUp: (userName, email, password, confirmedPassword) => dispatch(signUp(userName, email, password, confirmedPassword)),
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);