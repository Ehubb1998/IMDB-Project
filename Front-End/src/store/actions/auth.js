import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const UPDATE_EMAIL_VALUE = "UPDATE_EMAIL_VALUE";
export const UPDATE_USERNAME_VALUE = "UPDATE_USERNAME_VALUE";
export const UPDATE_PASSWORD_VALUE = "UPDATE_PASSWORD_VALUE";
export const UPDATE_CP_VALUE = "UPDATE_CP_VALUE";
export const UPDATE_TOKEN_VALUE = "UPDATE_TOKEN_VALUE";

export const updateEmailValue = value => ({ type: UPDATE_EMAIL_VALUE, value });

export const updateUserNameValue = value => ({ type: UPDATE_USERNAME_VALUE, value });

export const updatePasswordValue = value => ({ type: UPDATE_PASSWORD_VALUE, value });

export const updateCPValue = value => ({ type: UPDATE_CP_VALUE, value });

export const updateTokenValue = value => ({ type: UPDATE_TOKEN_VALUE, value });

export const signUp = () => {
    return async (dispatch, getState) => {
        const { auth: { email, userName, password, CP } } = getState();
        const confirmedPassword = CP;
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

            let userName;
            const userId = window.localStorage.getItem("IMDB_USER_ID");
            if (userId) {
                const user = async () => {
                    const res = await fetch(`http://localhost:8081/users/${userId}`);
                    userName = res;
                }
            }

            return (
                <Redirect to={`/selection/${userName}`} />
            )
        } catch (err) {
            console.error(err)
            // return (
            //     <Redi
            // )
        }
    }
}

export const logIn = () => {
    return async (dispatch, getState) => {

    }
}

export const demo = () => {
    return async (dispatch, getState) => {
        
    }
}