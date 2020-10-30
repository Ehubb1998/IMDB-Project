import React from 'react';
import { Redirect, Route } from 'react-router-dom';

let errorTitle;
let errorMsg;

export const UPDATE_EMAIL_VALUE = "UPDATE_EMAIL_VALUE";
export const UPDATE_USERNAME_VALUE = "UPDATE_USERNAME_VALUE";
export const UPDATE_PASSWORD_VALUE = "UPDATE_PASSWORD_VALUE";
export const UPDATE_CP_VALUE = "UPDATE_CP_VALUE";
export const UPDATE_TOKEN_VALUE = "UPDATE_TOKEN_VALUE";
export const DEMO_VALUES = "DEMO_VALUES";
export const DEMO_LOGIN = "DEMO_LOGIN";
export const HANDLE_ERRORS = "HANDLE_ERRORS";
export const LOGOUT = "LOGOUT";

export const updateEmailValue = value => ({ type: UPDATE_EMAIL_VALUE, value });

export const updateUserNameValue = value => ({ type: UPDATE_USERNAME_VALUE, value });

export const updatePasswordValue = value => ({ type: UPDATE_PASSWORD_VALUE, value });

export const updateCPValue = value => ({ type: UPDATE_CP_VALUE, value });

export const updateTokenValue = value => ({ type: UPDATE_TOKEN_VALUE, value });

export const demoLogin = value => ({ type: DEMO_LOGIN, value });

export const demoValues = () => ({ type: DEMO_VALUES, userName: "Demo", password: "test" });

export const handleErrors = () => ({ type: HANDLE_ERRORS, title: errorTitle, msg: errorMsg });

export const logOut = () => ({ type: LOGOUT });

export const signUp = (userName, email, password, confirmedPassword) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:8081/users", {
                method: "POST",
                body: JSON.stringify({ userName, email, password, confirmedPassword }),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (!res.ok) {
                throw res;
            }
            const { token, user: { id } } = await res.json();
            dispatch(updateTokenValue(token));

            window.localStorage.setItem("IMDB_ACCESS_TOKEN", token);
            window.localStorage.setItem("IMDB_USER_ID", id);

            let userName1;
            const userId = window.localStorage.getItem("IMDB_USER_ID");

            const user1 = async () => {
                const res = await fetch(`http://localhost:8081/users/${userId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const { userName } = await res.json();
                window.localStorage.setItem("IMDB_USERNAME", userName);
                // console.log(userName);
                userName1 = userName;
                window.location.href = `/selection/${userName1}`;
            }
            user1();

        } catch (err) {
            const { title, errors } = await err.json();
            console.log(title);
            console.log(errors);
            errorTitle = title;
            errorMsg = errors;
            dispatch(handleErrors());
        }
    }
}

export const logIn = (userName, password) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:8081/users/token", {
                method: "POST",
                body: JSON.stringify({ userName, password }),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (!res.ok) {
                throw res;
            }
            const { token, user: { id } } = await res.json();
            dispatch(updateTokenValue(token));

            window.localStorage.setItem("IMDB_ACCESS_TOKEN", token);
            window.localStorage.setItem("IMDB_USER_ID", id);

            let userName2;
            const userId = window.localStorage.getItem("IMDB_USER_ID");
            
            const user2 = async () => {
                const res = await fetch(`http://localhost:8081/users/${userId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const { userName } = await res.json();
                window.localStorage.setItem("IMDB_USERNAME", userName);
                // console.log(userName);
                userName2 = userName;
                window.location.href = `/homepage/${userName2}`;
            }
            user2();
            
        } catch (err) {
            const { title, errors } = await err.json();
            errorTitle = title;
            errorMsg = errors;
            dispatch(handleErrors());
        }
    }
}

export const demo = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:8081/users/token", {
                method: "POST",
                body: JSON.stringify({ userName: "Demo", password: "test" }),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (!res.ok) {
                throw res;
            }
            const { token, user: { id } } = await res.json();
            // console.log("token:" + token);
            dispatch(demoLogin(token));
            window.localStorage.setItem("IMDB_ACCESS_TOKEN", token);
            window.localStorage.setItem("IMDB_USER_ID", id);

            let userName3;
            const userId = window.localStorage.getItem("IMDB_USER_ID");
            
            const user3 = async () => {
                const res = await fetch(`http://localhost:8081/users/${userId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const { userName } = await res.json();
                window.localStorage.setItem("IMDB_USERNAME", userName);
                // console.log(userName);
                userName3 = userName;
                window.location.href = `/homepage/${userName3}`;
            }
            user3();

        } catch (err) {
            console.error(err);
        }
    }
}