import { UPDATE_EMAIL_VALUE, UPDATE_USERNAME_VALUE, UPDATE_PASSWORD_VALUE, UPDATE_CP_VALUE, UPDATE_TOKEN_VALUE } from '../actions/auth';

const initialState = {
    token: ""
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_EMAIL_VALUE: {
            return {
                ...state,
                email: action.value
            }
        }
        case UPDATE_USERNAME_VALUE: {
            return {
                ...state,
                userName: action.value
            }
        }
        case UPDATE_PASSWORD_VALUE: {
            return {
                ...state,
                password: action.value
            }
        }
        case UPDATE_CP_VALUE: {
            return {
                ...state,
                CP: action.value
            }
        }
        case UPDATE_TOKEN_VALUE: {
            return {
                ...state,
                token: action.value
            }
        }
        default: {
            return state
        }
    }
};

export default authReducer;