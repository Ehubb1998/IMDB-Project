import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const { isLoggedIn } = props;

    console.log("in selection page");
    if (isLoggedIn === null) {
        window.location.href = "/sign-up"
    }
    return (
        <Route {...props} />
    )
};

export default ProtectedRoute;