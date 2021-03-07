import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const { isLoggedIn } = props;

    if (isLoggedIn === null) {
        window.location.href = "/sign-up"
    }
    return (
        <Route {...props} />
    )
};

export default ProtectedRoute;