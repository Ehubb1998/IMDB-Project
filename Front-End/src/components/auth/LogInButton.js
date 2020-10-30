import React from 'react';

const LogInButton = () => {
    const login = () => {
        window.location.href = "/log-in"
    }

    return (
        <div id="login-button-div">
            <button onClick={login}>Login</button>
        </div>
    );
};

export default LogInButton;