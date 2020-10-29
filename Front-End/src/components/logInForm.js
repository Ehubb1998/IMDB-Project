import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUserNameValue, updatePasswordValue, logIn, demo, demoValues } from '../store/actions/auth';


const LogInForm = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    

    useEffect(() => {
        if (props.msg) {
            // return (
            //     <div>
            //         <form className="log-in-form">
            //             <h1 id="Login-header">Sign in to IMDB Lite</h1>
            //             <div className="errDiv">
            //                 <h3 style="font-size: 30px;font-weight: 700;color: red">{props.title}</h3>
            //                     <li style="font-size: 20px">{props.msg}</li>
            //             </div>
            //             <label htmlFor="userName">Username</label>
            //             <input onChange={updateUserName} value={userName} type="text" name="userName" id="userNameField" className="log-in-form" placeholder="IMDB" required />
            //             <label htmlFor="password">Password</label>
            //             <input onChange={updatePassword} value={password} type="password" name="password" id="passwordField" className="log-in-form" required />
            //             <button onClick={handleSubmit} type="submit" className="log-in-button">Log-In</button>
            //             <button onClick={handleDemo} className="demoButton">Demo</button>
            //         </form>
            //     </div>
            // )
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
        // props.updateUserNameValue(e);
        // props.updatePasswordValue(e);
        props.logIn(userName, password);
    }

    const updateUserName = (e) => {
        setUserName(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleDemo = (e) => {
        e.preventDefault();
        setUserName("Demo");
        setPassword("test");
        props.demoValues();
        props.demo();
    }
    return (
        <div>
            <form className="log-in-form">
                <h1 id="Login-header">Sign in to IMDB Lite</h1>
                <div className="errDiv"></div>
                <label htmlFor="userName">Username</label>
                <input onChange={updateUserName} value={userName} type="text" name="userName" id="userNameField" className="log-in-form" placeholder="IMDB" required />
                <label htmlFor="password">Password</label>
                <input onChange={updatePassword} value={password} type="password" name="password" id="passwordField" className="log-in-form" required />
                <button onClick={handleSubmit} type="submit" className="log-in-button">Log-In</button>
                <button onClick={handleDemo} className="demoButton">Demo</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userName: state.auth.userName,
        password: state.auth.password,
        title: state.auth.title,
        msg: state.auth.msg,
    }
}

const mapDispatchToProps = dispatch => {
    return (
        {
            updateUserNameValue: (event) => dispatch(updateUserNameValue(event.target.value)),
            updatePasswordValue: (event) => dispatch(updatePasswordValue(event.target.value)),
            logIn: (userName, password) => dispatch(logIn(userName, password)),
            demo: () => dispatch(demo()),
            demoValues: () => dispatch(demoValues()),
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);